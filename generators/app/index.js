'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  init: function() {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the fantastic ' + chalk.red('dslink') + ' generator!'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'appName',
        store: true,
        message: "Name of package? We suggest following a 'dslink-javascript-(name)' convention.",
        validate: function (val) {
          return val.length > 0 ? true : 'Please enter an app name.';
        }
      },
      {
        type: 'input',
        name: 'description',
        store: true,
        message: 'Description? Something short and simple that describes your link.',
        validate: function (val) {
          return val.length > 0 ? true : 'Please enter a description.';
        }
      },
      {
        type: 'input',
        name: 'linkName',
        store: true,
        message: "Name of the link? This is what you'll see your link as from DSA applications such as DGLux.",
        validate: function (val) {
          return val.length > 0 ? true : 'Please enter a link name.';
        }
      }
    ];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      this.fs.copyTpl(this.templatePath() + '/**', this.destinationPath(to), props);
      done();
    }.bind(this));
  },

  install: function () {
    this.installDependencies({
      bower: false
    });
  }
});
