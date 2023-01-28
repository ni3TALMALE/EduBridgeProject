import { Component, OnInit } from '@angular/core';
import { AngularServiceService } from 'src/app/angular-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private as:AngularServiceService) { }

  ngOnInit(): void {
  }
successNotification() {
      Swal.fire('Thank You!!!', 'We will Contact You Soon!!!', 'success');
    }

}
