import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First Front-End Project-FEP1';
  constructor(private http:HttpClient){}
  usersList: any[]= []

  ngOnInit(){
this.fetchData()
  }

  fetchData(){
    this.http.get('/users').subscribe((resp:any)=>{
      this.usersList=resp
      console.log(resp)
    })
  }
}
