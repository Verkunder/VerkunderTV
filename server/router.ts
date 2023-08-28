const express = require('express');
const router = express.Router();

router.get('/api/message', (req, res) => {
    res.send({ message: 'Hello, Express!' });
});

module.exports = router;
