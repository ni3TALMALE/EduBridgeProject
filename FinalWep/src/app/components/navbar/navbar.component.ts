import { Component, OnInit } from '@angular/core';
import { AngularServiceService } from 'src/app/angular-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private ps:AngularServiceService ) { }

  ngOnInit(): void {
  }

}
