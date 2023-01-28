import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularServiceService } from 'src/app/angular-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
  players:any;
 loginform=new FormGroup({
    username:new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(200)]),
    password:new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(8)])})
    login(){
      console.log(this.loginform);
    }
    get username(){
      return this.loginform.get('username')
    }
    get password(){
      return this.loginform.get('password')
    }
  constructor(private as:AngularServiceService) { }
 
  ngOnInit(): void {
  }
  insertData(insert:any){
    this.as.insertService(insert.value).subscribe();
  }
 
    validateregisteration(signIn:any){
      console.log("Form Submitted",signIn)
    }
    successNotification() {
      // Swal.fire('Account Created!', 'Please Login!!!', 'success');
      this.as.getid().subscribe((result:any)=>{ this.players=result; 
      // alert("Please Note Your USER ID: "+(result.id+1))
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your Account has been Created',
        text: 'User Id is: '+(result.id+1),
        showConfirmButton: false,
        timer: 2000
      })
    });
    }


}
