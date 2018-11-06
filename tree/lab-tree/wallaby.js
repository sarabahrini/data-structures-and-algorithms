module.exports = function () {

  return {

    files: ['tree/**/*.js'],


    tests: ['test/**/*.test.js'],

    env: {

      type: 'node',

      runner: 'node',

      params: {

        runner: '--harmony',

      },

    },

    testFramework: 'jest',

  };

};