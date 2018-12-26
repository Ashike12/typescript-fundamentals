"use strict";
exports.__esModule = true;
var request = require("request");
var User_1 = require("./User");
var options = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
};
var getGithubUserInfos = /** @class */ (function () {
    function getGithubUserInfos() {
    }
    getGithubUserInfos.prototype.UserInfo = function (UserName) {
        var requestURL = 'https://api.github.com/users/' + UserName;
        console.log(requestURL);
        request.get(requestURL, options, function (error, response, body) {
            var RequestUserInfo = new User_1.User(body);
            console.log(RequestUserInfo);
        });
    };
    getGithubUserInfos.prototype.UserRepos = function (UserName) {
        var requestURL = 'https://api.github.com/users/' + UserName + '/repos';
        request.get(requestURL, options, function (error, response, body) {
            console.log(body);
        });
    };
    return getGithubUserInfos;
}());
exports.getGithubUserInfos = getGithubUserInfos;
