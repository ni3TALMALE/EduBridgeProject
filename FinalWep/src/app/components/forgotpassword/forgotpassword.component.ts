import { Component, OnInit } from '@angular/core';
import { AngularServiceService } from 'src/app/angular-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private ps:AngularServiceService) { }

  ngOnInit(): void {
  }
  updateData(update:any){
    this.ps.updateService(update.value).subscribe();
  }
  successNotification() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your Account has been Updated',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
