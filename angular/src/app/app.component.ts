import { Component } from '@angular/core';
import {PdxServiceService} from './pdx-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pdx-usps';
  username = "";
  password = "";
  manifestList;

  constructor(private pdxService: PdxServiceService){

  }


  ngOnInit(): void {
    console.log("app component ng init called");
    this.pdxService.getManifestList().subscribe(
      list => { console.log(list); this.manifestList = list },
      err => console.log(err)
    )
}

   onLogin(): void {
     console.log("on Login clicked");
     console.log(this.username);
      this.pdxService.getManifestListExtended(this.username, this.password).subscribe(
      list => { console.log(list); this.manifestList = list },
      err => console.log(err)
    );
    }

  

}
