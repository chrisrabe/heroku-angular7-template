import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../_util/constants';
import { TutorialModel } from '../models/tutorial.modal';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class TutorialService extends DataService<TutorialModel> {

  constructor(httpClient: HttpClient) {
    super(httpClient,
      undefined,
      Constants.END_POINT.tutorials,
      TutorialModel);
  }
}
