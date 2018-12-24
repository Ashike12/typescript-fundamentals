"use strict";
exports.__esModule = true;
var request = require("request");
var getGithubUserInfos = /** @class */ (function () {
    function getGithubUserInfos() {
    }
    getGithubUserInfos.prototype.UserInfo = function (UserName) {
        var requestURL = 'https://api.github.com/users/' + UserName;
        var options = {
            headers: {
                'User-Agent': 'request'
            }
        };
        console.log(requestURL);
        request.get(requestURL, options, function (response) {
            console.log(response);
        });
    };
    getGithubUserInfos.prototype.UserRepos = function (UserName) {
    };
    return getGithubUserInfos;
}());
exports.getGithubUserInfos = getGithubUserInfos;
