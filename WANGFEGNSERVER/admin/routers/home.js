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
            swiper1:item.swiper1,
            card1:item.card1,
            card2:item.card2,
            runM:item.runM,
            skill:item.skill,
            fourth:item.fourth,
            guang:item.guang,
            tao:item.tao,
            recommend1:item.recommend1
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