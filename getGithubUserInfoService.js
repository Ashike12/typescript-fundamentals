"use strict";
exports.__esModule = true;
var request = require("request");
var User_1 = require("./User");
var Repo_1 = require("./Repo");
var _ = require("lodash");
var options = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
};
var GetGithubUserInfos = /** @class */ (function () {
    function GetGithubUserInfos() {
    }
    GetGithubUserInfos.prototype.UserInfo = function (UserName) {
        var requestURL = 'https://api.github.com/users/' + UserName;
        console.log(requestURL);
        request.get(requestURL, options, function (error, response, body) {
            var requestUserInfo = new User_1.User(body);
            console.log(requestUserInfo);
        });
    };
    GetGithubUserInfos.prototype.UserRepos = function (UserName) {
        var requestURL = 'https://api.github.com/users/' + UserName + '/repos';
        request.get(requestURL, options, function (error, response, body) {
            var RequestUserRepos = new Array();
            _.forEach(body, function (repo) {
                var userRepo = new Repo_1.Repo(repo);
                RequestUserRepos.push(userRepo);
                console.log(userRepo);
                console.log("\n\n---------------------------------------\n\n");
            });
        });
    };
    return GetGithubUserInfos;
}());
exports.GetGithubUserInfos = GetGithubUserInfos;
