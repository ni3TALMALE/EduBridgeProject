import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularServiceService } from 'src/app/angular-service.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
profile:any
  constructor(private ps:AngularServiceService) { 
    const user = localStorage.getItem('currentUser');
  
    var currentUser = JSON.parse(user?user:"");
    // document.write(currentUser);
    var token = currentUser.userid;
    this.ps.viewProfile({"id":token}).subscribe((result:any)=>{this.profile=result});
  }

  ngOnInit(): void {
  }

}
