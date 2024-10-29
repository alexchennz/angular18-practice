import { Component, OnInit, inject } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel } from '../../model/interface/role';
import { AsyncPipe, CommonModule, DatePipe, UpperCasePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { AlertComponent } from '../../reusableComponent/alert/alert.component';
import { MyButtonComponent } from '../../reusableComponent/my-button/my-button.component';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule, CommonModule, UpperCasePipe, DatePipe, AsyncPipe, AlertComponent, MyButtonComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  clientOject: Client = new Client();
  clientList: Client[] = [];
  designationList: Client[] = [];
  clientService = inject(ClientService);
  currentDate = new Date();

  userList$: Observable<any> = new Observable<any>;

  ngOnInit(): void {
    this.getAllClients();
    this.userList$ = this.clientService.getAllUsers();
  }

  // /**
  //  * Calls the API to get all clients
  //  * and assigns the result to the class's clientList property.
  //  */
  getAllClients(){
    this.clientService.getAllClients().subscribe((res:APIResponseModel)=>{
      this.clientList = res.data;
    })
  }

  onSaveClient(data: string){
    // debugger;
    this.clientService.addUpdateClient(this.clientOject).subscribe((res:APIResponseModel)=>{
      if(res.result){
          alert("Client Created successfully");
          this.getAllClients();
          this.clientOject = new Client();
      }
      else{
        alert(res.message);
      }
    })
  }

  deleteClient(client:Client){
    if(!confirm("Are you sure you want to delete this client?")) return;
    this.clientService.deleteClientById(client.clientId).subscribe((res:APIResponseModel)=>{
      if(res.result){
        alert("Client Deleted successfully");
        this.getAllClients();
      }
      else{
        alert(res.message);
      }
    })
  }

  onEdit(client: Client){
    this.clientOject = client;
  }
}
