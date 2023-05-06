const express = require('express');
const router = express.Router();

const options = {
    method: 'GET',
    url: 'https://unogsng.p.rapidapi.com/genres',
    headers: {
        'X-RapidAPI-Key': '7f823cf9demsh20000b9d7094239p10c4cejsn6dda24dda892',
        'X-RapidAPI-Host': 'unogsng.p.rapidapi.com'
    },
    useQueryString: true
};

//with promise:
const request = require("request")
router.post('/promise',(req, res) =>{
    return new Promise(function (resolve, reject){
        request(options,function(error, response, body){
            if(error) throw new Error(error)
            else{
                resolve(body)
            }
        });
    }).then((data) =>{
        res.render('template', {data});
    }).catch((error) => {
        console.log(error);
        res.send(error.message);
    })
});

// async/await
const fetch = require('node-fetch')
router.post('/async', async(req, res)=>{
    let returnValueRaw = await fetch(options.url);
    let data = await returnValueRaw.json();
    res.render('template',{data});
});

// callback
router.post('/callback',(req,res) =>{
    request(options, (error, response, body) =>{
        if(error){
            console.log(error);
        }else{
            const data = JSON.parse(body);
            res.render('template',{data});
        }
    });
});


module.exports = router;