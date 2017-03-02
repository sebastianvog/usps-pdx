import { Injectable } from '@angular/core';
import { DefaultApi} from "./api/api/DefaultApi"

@Injectable()
export class PdxServiceService {

  constructor(public pdxApi: DefaultApi) { }

  getManifestList() {
    return this.pdxApi.apiManifestsGet(0, 100);
  }

}
