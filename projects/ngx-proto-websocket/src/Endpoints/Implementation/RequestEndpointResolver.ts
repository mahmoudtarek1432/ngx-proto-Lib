import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IResponse } from '../../helper/Endpoint Managment/model/IResponse';
import { IEndpoint } from '../Interface/IResponseEndpoint';
import { EndpointsSubjects } from '../../helper/Subject/Endpoints-Subjects';

@Injectable({
  providedIn: 'root'
})
export class RequestEndpointResolver extends IEndpoint<any> {

  constructor(private endpointSubjects: EndpointsSubjects) {
    let x:any = null
    super(x);
   }

  override handle(responseObj: any){
    this.endpointSubjects.updateSubject<typeof responseObj>(responseObj.request_id.toString(), responseObj);
  }
}
