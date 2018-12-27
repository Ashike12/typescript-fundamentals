"use strict";
exports.__esModule = true;
var Repo = /** @class */ (function () {
    function Repo(userRepo) {
        this.RepoName = userRepo.name;
        this.ForkCount = userRepo.forks_count;
        this.Description = userRepo.description;
        this.RepoSize = userRepo.size;
        this.DefaultBranch = userRepo.default_branch;
    }
    return Repo;
}());
exports.Repo = Repo;
