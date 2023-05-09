const router = require('express').Router();
const dbJson = require('../../db/db.json');
const { createNote } = require('../../lib/app');

router.get('/notes', (req, res)=>{
    res.json(dbJson)
})

router.post('/notes', (req, res)=>{
    res.json(dbJson)
    const note = createNote(req.body, dbJson)
})

module.exports = router;