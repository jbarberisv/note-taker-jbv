const router = require('express').Router();
const dbJson = require('../../db/db.json');

router.get('/notes', (req, res)=>{
    res.json(dbJson)
})

module.exports = router;