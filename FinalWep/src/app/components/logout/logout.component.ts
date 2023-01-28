import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularServiceService } from 'src/app/angular-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router,
    private ps:AngularServiceService) { }

  ngOnInit(): void {
    // this.ps.logOut();
    // this.router.navigate(['login']);
  }


}
