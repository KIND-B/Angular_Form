import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { RegisterServiceService } from '../../service/register-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  displayedColumns: string[] = ['id', 'Name' , 'Phone', 'Password']
  dataSource=[]

  @ViewChild(MatPaginator) paginator: MatPaginator; 

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }

  studentData: any;
  constructor(private fb:FormBuilder,private service:RegisterServiceService) { }

  public registerForm:any

  ngOnInit(): void {
    this.setForm();
  }


  setForm(){
    this.registerForm = this.fb.group({
      nameCtrl:[],
      numberCtrl:[],
      pwdCtrl:[],
      cpwdCtrl:[]
    })
  }

 
 
  saveData(){

    this.studentData = {
      name: this.registerForm.controls['nameCtrl'].value,
      number: this.registerForm.controls['numberCtrl'].value,
      password: this.registerForm.controls['numberCtrl'].value,
      confirm: this.registerForm.controls['cpwdCtrl'].value,
    }
    this.dataSource.push(
      {name: this.registerForm.controls['nameCtrl'].value,
       number: this.registerForm.controls['numberCtrl'].value,
       password: this.registerForm.controls['numberCtrl'].value,
      confirm: this.registerForm.controls['cpwdCtrl'].value}
     )

      console.log("hiiiii",this.dataSource);
      

    this.service.saveStudent(this.studentData).subscribe((res) => {

      // this.dataSource = res;
      // this.dataSource.push({
      // name: this.registerForm.controls['nameCtrl'].value,
      // number: this.registerForm.controls['numberCtrl'].value,
      // password: this.registerForm.controls['numberCtrl'].value,
      // confirm: this.registerForm.controls['cpwdCtrl'].value,
      // })
      // this.notifications.showSuccess();
      this.registerForm.reset();

    }, (err) => {
      // this.notifications.showError();
    });

    
  }

  // const ELEMENT_DATA: PeriodicElement[] =this.studentData

}
