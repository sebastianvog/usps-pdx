import { Injectable } from '@angular/core';
import { DefaultApi} from "./api/api/DefaultApi"

@Injectable()
export class PdxServiceService {

  constructor(public pdxApi: DefaultApi) { }

  getManifestListExtended(username: string, password: string) {

    let queryParameters: any = {};
    
    if (username !== undefined) {
        queryParameters['username'] = username;
    }

    if (password !== undefined) {
        queryParameters['password'] = password;
    }

    return this.pdxApi.apiManifestsGet(0, 100, queryParameters);
  }  



  getManifestList() {
    return this.pdxApi.apiManifestsGet(0, 100);
  }

}
