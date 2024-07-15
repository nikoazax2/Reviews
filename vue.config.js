const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    configureWebpack: {
        output: {
            filename: 'reviews.js'
        }
    },
    chainWebpack: config => {
        config.optimization.delete('splitChunks');
    }
})
