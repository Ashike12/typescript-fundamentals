export { GetGithubUserInfos };
import * as request from "request"
import { Agent } from "http";
import { User } from './User'
import { Repo } from './Repo'
import * as _ from 'lodash'


const options: any = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
}

class GetGithubUserInfos {
    UserInfo(UserName: string) {
        let requestURL: any = 'https://api.github.com/users/' + UserName;
        console.log(requestURL);
        request.get(requestURL, options, (error: any, response: any, body: any) => {
            let requestUserInfo: User = new User(body);
            console.log(requestUserInfo);
        });
    }

    UserRepos(UserName: string) {
        let requestURL: any = 'https://api.github.com/users/' + UserName + '/repos';
        request.get(requestURL, options, (error: any, response: any, body: any) => {
            let RequestUserRepos: Array<object> = new Array();
            _.forEach(body, function (repo) {
                let userRepo: Repo = new Repo(repo);
                RequestUserRepos.push(userRepo);
                console.log(userRepo);
                console.log("\n\n---------------------------------------\n\n");
            });
        });
    }
}