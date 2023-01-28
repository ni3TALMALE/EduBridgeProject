import { Component, OnInit } from '@angular/core';
import { AngularServiceService } from 'src/app/angular-service.service';

@Component({
  selector: 'app-navlogin',
  templateUrl: './navlogin.component.html',
  styleUrls: ['./navlogin.component.css']
})
export class NavloginComponent implements OnInit {

  constructor(private ps:AngularServiceService) { this.viewFullTicket(); }
   



  ticket:any
  viewFullTicket(){
this.ps.viewTicket().subscribe((result:any)=>{this.ticket=result})
  }
  ngOnInit(): void {
  }

}
