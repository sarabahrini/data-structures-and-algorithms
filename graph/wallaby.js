module.exports = function () {

  return {

    files: ['lib/**/*.js'],


    tests: ['__test__/**/*.test.js'],

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