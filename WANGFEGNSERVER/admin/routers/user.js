const express = require('express'),
    route = express.Router(); //相当于app

const {
    writeFile
} = require('../utils/promiseFS');
const {
    success
} = require('../utils/tools')

//=>用户登录
route.post('/login', (req, res) => {
    let {
        phone = '',
            password = ''
    } = req.body || {};
    // password = handleMD5(password);
    const temp = req.$userDATA.find(item => {
        return item.phone === phone && item.password === password;
    });
    if (temp) {
        req.session.userID = parseFloat(temp.id);
        res.send(success(true));
        return;
    }
    console.log(temp);
    
    res.send(success(false, {
        codeText: 'user name password mismatch!'
    }));
});
//验证用户是否登录
route.get('/login', (req, res) => {
    let userID = req.session.userID;
    console.log('userId', req.session);
    if (userID) {
        res.send(success(true));
        return
    }
    res.send(success(false, {
        codeText: 'current user is not logged in '
    }))
})

//安全退出
route.get('/signout', (req, res) => {
    req.session.userID = null;
    res.send(success(true));
})
//用户注册 
route.post('/add', (req, res) => {
    let $userDATA = req.$userDATA,
        passDATA = null;
    console.log($userDATA, req.body);

    passDATA = Object.assign({
        userid: $userDATA.length === 0 ? 1 : (parseFloat($userDATA[$userDATA.length - 1]['id'] + 1)),
        phone: '',
        password: "",
        state: 0
    }, (req.body || {}))
    $userDATA.push(passDATA)
    writeFile('./json/user.json', $userDATA).then(() => {
        res.send(success(true))
    }).catch(() => {
        res.send(success(false))
    })
})
module.exports = route;