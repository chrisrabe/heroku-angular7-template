import { FormGroup } from '@angular/forms';
import { TutorialTypes } from '../_util/constants';
import { BaseModel } from './base.model';

export class TutorialModel extends BaseModel {
  public title: string;
  public type: TutorialTypes;
  public links: TutorialLinkModel[];

  constructor(props?: any) {
    super(props);
  }

  public createForm(): FormGroup {
    return undefined;
  }

  public fromItemJson(base: any): TutorialModel {
    return new TutorialModel(base);
  }

  public fromListJson(base: any): TutorialModel[] {
    return base.tutorials ?
      base.tutorials.map(json => new TutorialModel(json))
      : [];
  }
}

export class TutorialLinkModel {
  public description: string;
  public url: string;
}
