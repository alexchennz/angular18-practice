import { Component, OnInit, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel, ClientProject, Employee } from '../../model/interface/role';
import { Client } from '../../model/class/Client';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, DatePipe],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit {
  projectForm: FormGroup = new FormGroup({
    "clientProjectId": new FormControl(0),
    "projectName": new FormControl("", [Validators.required, Validators.minLength(4)]),
    "startDate": new FormControl(''),
    "expectedEndDate": new FormControl(''),
    "leadByEmpId": new FormControl(""),
    "completedDate": new FormControl(''),
    "contactPerson": new FormControl(''),
    "contactPersonContactNo": new FormControl(''),
    "totalEmpWorking": new FormControl(''),
    "projectCost": new FormControl(''),
    "projectDetails": new FormControl(''),
    "contactPersonEmailId": new FormControl(''),
    "clientId": new FormControl('')
  });

  clientService = inject(ClientService)
  employeeList: Employee[] = []
  clientList: Client[] = []

  firstName = signal("Angular Signal");
  projectList = signal<ClientProject[]>([]);


  ngOnInit(): void {
    const name = this.firstName();
    this.getAllEmployee();
    this.getAllClients();
    this.getAllClientProjects();
  }

  getAllEmployee(){
    this.clientService.getAllEmployee().subscribe((res:APIResponseModel)=>{
      this.employeeList = res.data
    })
  }

  getAllClients(){
    this.clientService.getAllClients().subscribe((res:APIResponseModel)=>{
      this.clientList = res.data
    })
  }

  getAllClientProjects(){
    this.clientService.getAllClientProjects().subscribe((res:APIResponseModel)=>{
      this.projectList.set(res.data)
    })
  }

  onSaveProject(){
    const formValue = this.projectForm.value;
    // debugger;
    this.clientService.addUpdateClientProjects(formValue).subscribe((res:APIResponseModel)=>{
      if(res.result){
        alert("Project Created successfully");
        this.getAllClientProjects();
        this.clientList = [];
      }else{
        alert(res.message);
      }
    })
  }

  changeFirstName(){
    this.firstName.set("Angular Signal - Changed");
  }
}
