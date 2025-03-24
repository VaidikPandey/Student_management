const express = require('express');
const app = express();
const studentRoutes = require('./routes/students');

app.use(express.json());
app.use('/students', studentRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Student Management System API');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
