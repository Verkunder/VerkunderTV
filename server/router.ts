const express = require('express');
const router = express.Router();
const slideContent = require('./databaseSimulation/sliderContent.json');

router.get('/api/message', (req, res) => {
    res.send({ message: 'Hello, Express!' });
});

router.get('/api/slider', (req, res) => {
    res.send(slideContent);
});

router.get('/images/:imageName', (req, res) => {
    const imageName = req.params.imageName;
    const imagePath = __dirname + '/images/' + imageName;

    res.sendFile(imagePath);
});

module.exports = router;
