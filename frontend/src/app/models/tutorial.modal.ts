import {BaseModel} from "./base.model";
import {FormGroup} from "@angular/forms";
import {TutorialTypes} from "../_util/constants";

class TutorialModel extends BaseModel {
  public title: string;
  public type: TutorialTypes;
  public links: TutorialLinkModel[];

  constructor(props?: any) {
    super(props);
  }

  createForm(): FormGroup {
    return undefined;
  }

  fromItemJson(base: any): TutorialModel {
    return new TutorialModel(base);
  }

  fromListJson(base: any): TutorialModel[] {
    return base.tutorials ?
      base.tutorials.map(json => new TutorialModel(json))
      : [];
  }
}

class TutorialLinkModel {
  public description: string;
  public url: string;
}
