import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  adminLoginRef = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  })

  errorMeg: string ="";
  
  constructor(public as:AdminService, public router: Router) { }

  ngOnInit(): void {
  }

  adminSignIn() {
    let adminLogin = this.adminLoginRef.value;
    console.log(adminLogin);
    this.as.adminSignIn(adminLogin).subscribe({
      next:(result:any) => {
        if(result == "Logged in successfuuly") {
          this.router.navigate(['adminhome']);
        }
        else{
          this.errorMeg=result;
        }
      },
      error:(error:any) => console.log(error),
      complete:() => console.log("done")
    })
  }

}
