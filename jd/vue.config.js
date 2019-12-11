module.exports = {
    publicPath:'/',
    lintOnSave:true,
    devServer:{
        proxy:'http://localhost:9999'
    }
}
