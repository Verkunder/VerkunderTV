const express = require('express');
const router = express.Router();
const slideContent = require('./databaseSimulation/sliderContent.json');

router.get('/api/message', (req, res) => {
    res.send({ message: 'Hello, Express!' });
});

router.get('/api/slider', (req, res) => {
    res.send(slideContent);
});

module.exports = router;
