module.exports={
    devServer:{
        open:true
    },
    chainWebpack: (config) => {
        config
            .plugin('html')
            .tap((args) => {
                args[0].title = '荡客电子烟';
                return args;
            });
    }
}