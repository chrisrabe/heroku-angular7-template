import { Injectable } from '@angular/core';
import {DataService} from "./data.service";
import {TutorialModel} from "../models/tutorial.modal";
import {HttpClient} from "@angular/common/http";
import {Constants} from "../_util/constants";

@Injectable({
  providedIn: 'root'
})
export class TutorialService extends DataService<TutorialModel>{

  constructor(httpClient: HttpClient) {
    super(httpClient,
      undefined,
      Constants.END_POINT.tutorials,
      TutorialModel);
  }
}
