var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var Raven = require('raven-js')

var sentryKey = '44d54aaa3fc34d19b51d15de6a1992c6'
var sentryApp = '98085'
var sentryURL = 'https://' + sentryKey + '@app.getsentry.com/' + sentryApp

var _APP_INFO = {
  name: 'Github Battle',
  branch: '4',
  version: '1.0'
}

Raven.config(sentryURL, {
  release: _APP_INFO.version,
}).install();

ReactDOM.render(routes, 
  document.getElementById('app'));