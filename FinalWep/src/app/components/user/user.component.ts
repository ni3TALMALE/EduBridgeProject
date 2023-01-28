import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularServiceService } from 'src/app/angular-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  players:any
  constructor(private router: Router,private ps:AngularServiceService) { 
    this.viewFullUser();
this.viewFullTicket();
    const user = localStorage.getItem('currentUser');
  
    var currentUser = JSON.parse(user?user:"");
    // document.write(currentUser);
    var token = currentUser.userid;
    this.ps.viewProfile({"id":token}).subscribe((result:any)=>{this.players=result});
  }

  ngOnInit(): void {
  }
  users:any
  viewFullUser(){
this.ps.viewUser().subscribe((result:any)=>{this.users=result})
  }
  insertData(insert:any){
    this.ps.insertService(insert.value).subscribe();
  }
  deleteData(data:any){
    this.ps.deleteAccount(data.value).subscribe();
  }
  updateData(update:any){
    this.ps.updateService(update.value).subscribe();
  }
  alertConfirmation() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Removed!', 'Account removed successfully.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Account still in our database.)', 'error');
      }
    });
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
  registerNotification() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your Account has been Updated',
      showConfirmButton: false,
      timer: 1500
    })
  }
  ticket:any
  viewFullTicket(){
this.ps.viewTicket().subscribe((result:any)=>{this.ticket=result})
  }

  showData(view:any){

  }}
