import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponseModel } from '../model/interface/role';
import { environment } from '../../environments/environment.development';
import { Constant } from '../constant/Constant';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http : HttpClient) { }

  getAllDesignations():Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>(environment.API_URL + Constant.API_METHOD.GET_ALL_DESIGNATION);
  }
}
