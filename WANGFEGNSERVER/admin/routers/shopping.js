const express = require('express'),
    route = express.Router();
const {
    writeFile
} = require('../utils/promiseFS')
const {
    success
} = require('../utils/tools')
route.get('/shopCar', (req, res) => {
    let {
        userid,
        productId, // 商品Id
        productName, // 商品名称
        salePrice, // 商品价格
        productImage, // 图片地址
        checked, // 是否选中
        productNum // 商品数量
    } = req.query || {};
    let data = req.$shoppingDATA;

    data.forEach(item => {
        if (item.userid == userid) {
        item.children.push(req.query)
            writeFile('./json/shopping.json', data).then(() => {
                res.send(success(true, {
                    data: data
                }))
            }).catch(() => {
                res.send(success(false))
            })
        }
    });

})
module.exports = route;