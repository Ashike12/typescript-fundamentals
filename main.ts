import {GetGithubUserInfos} from './getGithubUserInfoService'

import * as _ from "lodash";

let GithubUserInfo:GetGithubUserInfos = new GetGithubUserInfos();

//GithubUserInfo.HtmlParser();
GithubUserInfo.UserInfo('Ashike12');
GithubUserInfo.UserRepos('Ashike12');