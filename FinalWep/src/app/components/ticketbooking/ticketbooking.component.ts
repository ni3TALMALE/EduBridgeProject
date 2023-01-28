import { Component, OnInit } from '@angular/core';
import { AngularServiceService } from 'src/app/angular-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ticketbooking',
  templateUrl: './ticketbooking.component.html',
  styleUrls: ['./ticketbooking.component.css']
})
export class TicketbookingComponent implements OnInit {
players:any;
  constructor(private as:AngularServiceService) { }

  ngOnInit(): void {
  }
  insertticketData(ticket:any){
    this.as.ticketService(ticket.value).subscribe();
  }
  successNotification() {
   
    this.as.getticketid().subscribe((result:any)=>{ this.players=result; 
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Ticket Booked!',
        text: 'Ticket Id is: '+(result.id+1),
        showConfirmButton: false,
        timer: 2000
  })});
}
}
