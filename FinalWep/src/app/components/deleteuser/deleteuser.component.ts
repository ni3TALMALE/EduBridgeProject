import { Component, OnInit } from '@angular/core';
import { AngularServiceService } from 'src/app/angular-service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {

  constructor(private as:AngularServiceService) { }

  ngOnInit(): void {
  }
  deleteData(data:any){
    this.as.deleteAccount(data.value).subscribe();
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
}
