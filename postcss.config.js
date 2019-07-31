module.exports = {
    plugins: {
        autoprefixer: {},
        // rem适配
        'postcss-pxtorem': {
            rootValue: 37.5,
            unitPrecision: 5, // 最小精度，小数点位数
            propList: ['*'] // 匹配属性
        }
    }
}
