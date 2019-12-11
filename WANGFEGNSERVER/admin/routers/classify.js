const express = require('express'),
    route = express.Router();
const {
    success
} = require('../utils/tools')
route.get('/list', (req, res) => {
    let data = req.$classifyDATA
    data = data.map(item => {
        return {
            title: item.title,
            hot: item.hot
        }
    })
    if (data.length > 0) {
        res.send(success(true, {
            data: data
        }))
        return
    }
    res.send(success(false, {
        codeText: 'no matching data was found!'
    }))
})
module.exports = route