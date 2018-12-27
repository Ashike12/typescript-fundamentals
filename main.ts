import {GetGithubUserInfos} from './getGithubUserInfoService'

import * as _ from "lodash";

let GithubUserInfo:GetGithubUserInfos = new GetGithubUserInfos();

GithubUserInfo.UserRepos('adibmehedi');
//GithubUserInfo.UserInfo('Ashike12');