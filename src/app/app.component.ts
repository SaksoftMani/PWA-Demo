import { Component } from '@angular/core';
import { TestApiService } from 'src/api/test-api.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Test';
 
  users:any;
  page:any = 1;
  constructor(private apiService: TestApiService) { }
  ngOnInit() {
    this.apiService.getUserDetail(this.page).subscribe(data=>{
      console.log(data);
      this.users = data["data"];
    });
   
  }

  public getUserDt(page:any){
    this.apiService.getUserDetail(page).subscribe(data=>{
      console.log(data);
      this.users = data["data"];
    });
  }
}
