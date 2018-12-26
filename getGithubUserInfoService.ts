export { GetGithubUserInfos };
import * as request from "request"
import { Agent } from "http";
import { User } from './User'


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
                let RequestUserInfo:User = new User(body);
                console.log(RequestUserInfo);
            });
        }

        UserRepos(UserName: string) {
            let requestURL: any = 'https://api.github.com/users/' + UserName + '/repos';
            request.get(requestURL, options, (error: any, response: any, body: any) => {
                console.log(body)
            });
        }
    }