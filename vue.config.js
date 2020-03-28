module.exports= {//这里不支持export default这种写法
    devServer:{
        proxy: {
            '/api' :{
                target:'https://www.easy-mock.com/mock/5e7e147e9b29a621d819a9c8/api',
                changeOrigin: true,
                pathRequiresRewrite:{
                    '^/api':'/'
                }
            }
        }
    }
}
