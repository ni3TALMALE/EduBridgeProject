import { Component, OnInit } from '@angular/core';
import { AngularServiceService } from 'src/app/angular-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ticketshow',
  templateUrl: './ticketshow.component.html',
  styleUrls: ['./ticketshow.component.css']
})
export class TicketshowComponent implements OnInit {

  constructor(private ps:AngularServiceService) {
    this.viewFullTicket();
   }

  ngOnInit(): void {
  }
  ticket:any
  viewFullTicket(){
this.ps.viewTicket().subscribe((result:any)=>{this.ticket=result})
  }
  insertticketData(ticket:any){
    this.ps.ticketService(ticket.value).subscribe();
  }
  successNotification() {
   
    this.ps.getticketid().subscribe((result:any)=>{ this.ticket=result; 
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Ticket Booked!',
        text: 'Ticket Id is: '+(result.tid+1),
        showConfirmButton: false,
        timer: 2000
  })});
}
  updateTicketData(update:any){
    this.ps.updateTicketService(update.value).subscribe();
  }
  deleteTicketData(data:any){
    this.ps.deleteTicket(data.value).subscribe();
  }
  alertConfirmation() {
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'Your Ticket Is Canceled!!',
      showConfirmButton: false,
      timer: 1500
    })
  }
  updateNotification() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your Account has been Updated',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
