import { Component, OnInit } from '@angular/core';
import { AngularServiceService } from 'src/app/angular-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  
  constructor(private ps:AngularServiceService) { 
    const user = localStorage.getItem('currentUser');
  
  var currentUser = JSON.parse(user?user:"");
  //  document.write(currentUser);
  var token = currentUser.userid;
  
    this.ps.viewBooking({"id":token}).subscribe((result:any)=>{this.ticket=result});
  }

  ngOnInit(): void {
  }
  ticket:any
  // viewBooking(data:any){
  //   this.ps.viewBooking(data.value).subscribe((result:any)=>{this.ticket=result});
  // }

}
