"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(userInfo) {
        this.FullName = userInfo.login;
        this.Follwers = userInfo.followers;
        this.Following = userInfo.following;
        this.RepoCount = userInfo.public_repos;
    }
    return User;
}());
exports.User = User;
