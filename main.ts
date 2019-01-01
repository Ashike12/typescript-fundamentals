import {GetGithubUserInfos} from './getGithubUserInfoService'

import * as _ from "lodash";
import { User } from './User'
import { Repo } from './Repo'

let GithubUserInfo:GetGithubUserInfos = new GetGithubUserInfos();

//GithubUserInfo.HtmlParser();
// GithubUserInfo.UserInfo('Ashike12', (response:User) => {
//     console.log(response);
// });

GithubUserInfo.UserRepos('Ashike12', (response:Repo[]) => {
    console.log(response);
});