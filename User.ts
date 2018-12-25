export { User }

class User {
    public FullName: any;
    public Follwers: any;
    public Following: any;
    public RepoCount: any;

    constructor(userInfo: any) {
        this.FullName = userInfo.login;
        this.Follwers = userInfo.followers;
        this.Following = userInfo.following;
        this.RepoCount = userInfo.public_repos;
    }
}
