exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['todo-spec.js'],
    seleniumServerStartTimeout: 3600000,
    jasmineNodeOpts: {
      defaultTimeoutInterval: 3600000
    }
  };