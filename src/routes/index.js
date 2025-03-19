const express = require('express');
const path = require('path')
const router = express.Router();

router.get('/', (req, res) => {

    if(!('name' in req.query)) {
        res.status(422).send();
        console.log('Failed first step, query: ', req.query);
        
        return;
    }

    const data = {
        name: req.query.name,
    };
    
    res.render('manual', data);
});

module.exports = router;


