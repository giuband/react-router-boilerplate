// Karma configuration
// Generated on Wed Feb 03 2016 17:32:21 GMT+0100 (CET)

var browsers;
if (process.env.EXCLUDE) {
  // we're probably not testing UI components so we can just use PhantomJS
  browsers = ['PhantomJS'];
} else {
  browsers = ['Chrome'];
}

module.exports = (config) => {
  config.set({

    browsers,

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      './test/**/**.js',
    ],

    // list of files to exclude
    exclude: [
      process.env.EXCLUDE,
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './test/**/**.js': ['webpack', 'sourcemap'],
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE ||
    // config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            loader: 'babel',
            exclude: '/(node_modules)/',
          },
          {
            test: /\.scss$/,
            loaders: [
              'style-loader',
              'css-loader',
              'postcss',
              'sass-loader',
            ],
          },
        ],
      },
      resolve: {
        extensions: ['', '.js', '.jsx'],
      },
    },

    webpackServer: {
      noInfo: true,
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    // concurrency: Infinity,
  });
};
