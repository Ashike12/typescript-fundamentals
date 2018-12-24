export {getGithubUserInfos};
import * as request from "request"
import { Agent } from "http";

class getGithubUserInfos {
    UserInfo (UserName:string){
        let requestURL:any = 'https://api.github.com/users/'+UserName;
        let options:any = {
            headers: {
                'User-Agent': 'request'
            }
        }
        console.log(requestURL);
        request.get(requestURL, options, (response:any)=>{
            console.log(response);
        }); 
    }

    UserRepos (UserName:string){

    }
}