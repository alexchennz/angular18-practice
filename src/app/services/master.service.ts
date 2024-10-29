import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponseModel } from '../model/interface/role';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http : HttpClient) { }

  getAllDesignations():Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation');
  }
}
