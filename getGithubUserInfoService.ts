export { GetGithubUserInfos };
import * as request from "request"
import { Agent } from "http";
import { User } from './User'
import { Repo } from './Repo'
import * as _ from 'lodash'
import { parse } from 'node-html-parser';

const MAX = (1 << 20);
const OPTIONS: any = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
}

class GetGithubUserInfos {
    UserInfo(UserName: string, cb: (user: User) => any) {
        let requestURL: any = 'https://api.github.com/users/' + UserName;
        console.log(requestURL);
        request.get(requestURL, OPTIONS, (error: any, response: any, body: any) => {
            let requestUserInfo: User = new User(body);
            //console.log(requestUserInfo);
            cb(requestUserInfo);
        });
    }

    UserRepos(UserName: string, cb: (repos:Repo[]) => any) {
        let requestURL: any = 'https://api.github.com/users/' + UserName + '/repos';
        request.get(requestURL, OPTIONS, (error: any, response: any, body: any) => {
            let RequestUserRepos = new Array();
            _.forEach(body, function(repo){
                RequestUserRepos.push(new Repo(repo));
            })
            cb(RequestUserRepos);
        });
    }
}