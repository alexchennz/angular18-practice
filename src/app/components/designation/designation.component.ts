import { Component, OnInit, inject } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { CommonModule } from '@angular/common';
import { APIResponseModel, IDesignation } from '../../model/interface/role';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {
  designationList: IDesignation[] = [];
  masterService = inject(MasterService);
  isLoading: boolean = true;
  ngOnInit(): void{
    this.masterService.getAllDesignations().subscribe((res:APIResponseModel)=>{
      this.designationList = res.data;
      this.isLoading = false;
    },error=>{
      console.log("API Error",error);
    })
  }
}
