export { getGithubUserInfos };
import * as request from "request"
import { Agent } from "http";
import { User } from './User'

class getGithubUserInfos {
        UserInfo(UserName: string) {
            let requestURL: any = 'https://api.github.com/users/' + UserName;
            let options: any = {
                headers: {
                    'User-Agent': 'request'
                },
                json: true
            }
            console.log(requestURL);
            request.get(requestURL, options, (error: any, response: any, body: any) => {
                let RequestUserInfo:User = new User(body);
                console.log(body);
                
            });
        }

        UserRepos(UserName: string) {

        }
    }