'use strict'
// var http = require('http');
var Koa = require('koa');
var path = require('path');
var wechat = require('./wechat/g');
var util = require('./libs/util');
var wechat_file = path.join(__dirname,'./config/wechat.txt');

var config = {
    wechat: {
        appID:'wxdf3ad287f85cd5de',
        appSecret:'3b5aef44da441d0350f56f02f111c96b',
        token:'agentleman',
        getAccessToken: function(){
            return util.readFileAsync(wechat_file);
        },
        saveAccessToken: function(data) {
            data = JSON.stringify(data);
            return util.writeFileAsync(wechat_file,data);
        }
    }
};

var app = new Koa();
app.use(wechat(config.wechat));

app.listen(1234);
console.log('listening 1234')