import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {IRole, APIResponseModel} from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {
  roleList: IRole[] = [];

  http = inject(HttpClient);
  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles(){
    this.http.get<APIResponseModel>('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles').subscribe((res:APIResponseModel)=>{
      this.roleList = res.data;
    });
  }



  // firstName: string = 'Angular';
  // angularVersion: string = '18.2.0';

  // version: number = 18;
  // currentDate: Date = new Date();

  // isActive: boolean = false;

  // inputType: string = 'radio';

  // selectedValue: string = '';

  // showAlert(){
  //   alert('Show Alert');
  // }

  // showAlertMessage(message: string){
  //   alert(message);
  // }
}
