// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require( 'path' )

function resolve(dir) {
    return path.resolve( __dirname, dir )
}

const dir = resolve( 'src/assets/icons' )
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/accountApp/'
        : '/accountApp/',
    chainWebpack: config => {
        config.module.rules.delete( "svg" ); //重点:删除默认配置中处理svg,
        //const svgRule = config.module.rule('svg')
        //svgRule.uses.clear()
        config.module
            .rule( 'svg-sprite-loader' )
            .test( /\.svg$/ )
            .include
            .add( dir ) //处理svg目录
            .end()
            .use( 'svg-sprite-loader' )
            .loader( 'svg-sprite-loader' )
            .options( {
                extract: false
            } ).end()
            .use( 'svgo-loader' ).loader( 'svgo-loader' )
            .tap( options => ({...options, plugins: [{removeAttrs: {attrs: 'fill'}}]}) ).end()
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        config.plugin( 'svg-sprite' ).use( require( 'svg-sprite-loader/plugin' ), [{plainSprite: true}] )
        config.module.rule( 'svg' ).exclude.add( dir )
    }
}
