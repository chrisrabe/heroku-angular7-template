import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { BaseModel } from '../models/base.model';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T extends BaseModel> {

  constructor(protected httpClient: HttpClient,
              protected baseUrl: string = environment.BASE_API_URL,
              protected endPoint: string) { }

  public postRoute(postObject: object, route: string): Observable<T> {
    const path = [this.baseUrl, this.endPoint, route].join('/');
    return this.httpClient.post(path, postObject);
  }
}
