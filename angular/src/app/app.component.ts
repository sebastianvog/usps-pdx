import { Component } from '@angular/core';
import {PdxServiceService} from './pdx-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pdx-usps';

  constructor(private pdxService: PdxServiceService){

  }


  ngOnInit(): void {
    console.log("app component ng init called");
    this.pdxService.getManifestList().subscribe(
      list => console.log(list),
      err => console.log(err)
    )
  }

}
