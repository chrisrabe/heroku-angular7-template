import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { BaseModel } from '../models/base.model';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T extends BaseModel> {

  protected readonly modelObj: T;
  private apiPath: string;

  constructor(protected httpClient: HttpClient,
              protected baseUrl: string = environment.BASE_API_URL,
              protected endPoint: string,
              private modelType: new () => T) {
    this.modelObj = new this.modelType();
    this.apiPath = `${this.baseUrl}/${this.endPoint}`;
  }

  /**
   * Sends a post request to the /list action of the endpoint
   * and returns an array of modelType
   * @param postObject
   */
  public postList(postObject: object): Observable<Array<T>> {
    return this.httpClient.post(`${this.apiPath}/list`, postObject)
      .pipe(map((json: any) => this.modelObj.fromListJson(json)));
  }

  /**
   * Sends a post request to the /details action of the endpoint
   * and returns an object of modelType
   * @param postObject
   */
  public postDetails(postObject: object): Observable<T> {
    return this.httpClient.post(`${this.apiPath}/details`, postObject)
      .pipe(map((json: any) => this.modelObj.fromItemJson(json)));
  }

  /**
   * Sends a post request to the /create action of the endpoint
   * and returns an object of modelType
   * @param postObject
   */
  public postCreate(postObject: object): Observable<T> {
    return this.httpClient.post(`${this.apiPath}/create`, postObject)
      .pipe(map((json: any) => this.modelObj.fromItemJson(json)));
  }

  /**
   * Sends a post request to the /edit action of the endpoint
   * and returns an object of modelType
   * @param postObject
   */
  public postEdit(postObject: object): Observable<T> {
    return this.httpClient.post(`${this.apiPath}/edit`, postObject)
      .pipe(map((json: any) => this.modelObj.fromItemJson(json)));
  }

  /**
   * Sends a post request to a custom route and returns an object of
   * modelType. Use only when necessary.
   * @param postObject
   * @param route
   * @param outputModelObj
   */
  public postRoute(postObject: object, route: string, outputModelObj?: any): Observable<T> {
    if (!outputModelObj) {
      outputModelObj = this.modelObj;
    }

    return this.httpClient.post(`${this.apiPath}/${route}`, postObject)
      .pipe(map((json: any) => outputModelObj.fromItemJson(json)));
  }
}
