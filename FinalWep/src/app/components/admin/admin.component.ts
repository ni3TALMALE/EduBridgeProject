import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularServiceService } from 'src/app/angular-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router,private ps:AngularServiceService) { 
    const user = localStorage.getItem('currentUser');
  
    var currentUser = JSON.parse(user?user:"");
    // document.write(currentUser);
    var token = currentUser.userid;
    this.ps.viewProfile({"id":token}).subscribe((result:any)=>{this.players=result});
  }
  get id(){
    return this.loginForm.get('id');
  }
  ngOnInit(): void {
  }
  players:any
  loginForm= new FormGroup({
    id: new FormControl('',[Validators.required, Validators.maxLength(30)]),
    password: new FormControl('',[Validators.required, Validators.maxLength(30)]),
  });

  singleData(data:any){
    this.ps.getuser(this.loginForm.value).subscribe( 
      data=>{ 
    this.ps.getiduser(data.value).subscribe((result:any)=>{this.players=result});
      })}
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

}
