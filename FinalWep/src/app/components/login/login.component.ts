import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup  } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularServiceService } from 'src/app/angular-service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  players:any;
  loginForm= new FormGroup({
    id: new FormControl('',[Validators.required, Validators.maxLength(30)]),
    password: new FormControl('',[Validators.required, Validators.maxLength(30)]),
  });
  
  get id(){
    return this.loginForm.get('id');
  }
  login(insert:any){
    console.log(this.loginForm);
  }
  get password(){
    return this.loginForm.get('password');
  }
 
  constructor(private router: Router,
    private ps:AngularServiceService) { }

  ngOnInit(): void {
  }
submit(){
  if(this.id?.value?.length==0 || this.password?.value?.length==0 || this.id?.invalid || this.password?.invalid){ 
    alert("Enter Valid Details"); } 
    else if(this.id?.value=='2' && this.password?.value=='123'){ 
      localStorage.setItem('currentUser', JSON.stringify({ userid:this.id?.value }));
      this.router.navigate(['/user']); } 
      else{  
        this.ps.getuser(this.loginForm.value).subscribe( 
          data=>{ this.ps.getuser(this.loginForm.value).subscribe()
            localStorage.setItem('currentUser', JSON.stringify({ userid:this.id?.value }));
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'You Have Succesfully Logged In',
              showConfirmButton: false,
              timer: 500
            })
            this.router.navigate(['/admin']);
              
          },
          error=>{
            Swal.fire({
              position: 'center',
              icon: 'warning',
              title: 'Your Are Not Authorized!!',
              text: 'Login With Correct Details..',
              showConfirmButton: false,
              timer: 1500
          })
          } 
        );
      }
}
}
