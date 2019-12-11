const express = require('express'),
    route = express.Router(); //相当于app
const {
    success
} = require('../utils/tools')
route.get('/slide', (req, res) => {
    let data = req.$picDATA;
    data = data.map(item => {
        console.log(item.runM);
        return {
            swiper:item.swiper,
            card1:item.card1,
            card2:item.card2,
            runM:item.runM
        }  
    })
    if (data.length > 0) {
        res.send(success(true, {
            data: data
        }))
        return;
    }
    res.send(success(false, {
        codeText: 'no matching data was found!'
    }))
})
module.exports = route;