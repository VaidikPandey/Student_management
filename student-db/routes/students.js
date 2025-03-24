const express = require('express');
const router = express.Router();
const db = require('../database/db');

router.post('/', async (req, res) => {
    const { name, age, email } = req.body;
    try {
        const [result] = await db.query('INSERT INTO Students (name, age, email) VALUES (?, ?, ?)', [name, age, email]);
        res.json({ student_id: result.insertId });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM Students');
        res.json(rows);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM Students WHERE id = ?', [req.params.id]);
        if (rows.length > 0) res.json(rows[0]);
        else res.status(404).send('Student not found');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.put('/:id', async (req, res) => {
    const { name, age, email } = req.body;
    try {
        await db.query('UPDATE Students SET name = ?, age = ?, email = ? WHERE id = ?', [name, age, email, req.params.id]);
        res.send('Student updated successfully');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await db.query('DELETE FROM Students WHERE id = ?', [req.params.id]);
        res.send('Student deleted successfully');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;
