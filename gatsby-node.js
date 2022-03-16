const webpack = require("webpack");

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    actions.setWebpackConfig({
        plugins: [
            new webpack.ProvidePlugin({
                Buffer: [require.resolve("buffer/"), "Buffer"],
            }),
        ],
        resolve: {
            fallback: {
                "crypto": require.resolve("crypto-browserify"),
                "stream": require.resolve("stream-browserify"),
                "util": require.resolve("util/"),
                "assert": false,
                "http": false,
                "https": false,
                "os": false
            },
        },
    })
    if (stage === "build-html" || stage === "develop-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /@randlabs/,
              use: loaders.null(),
            },
            {
              test: /electron/,
              use: loaders.null(),
            },
          ],
        },
      })
    }
}