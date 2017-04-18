var express = require('express');
var router = express.Router();

// GET blog listing
router.get('/', (req, res) => {
    res.send('it works');
});

module.exports = router;