import { FormGroup } from '@angular/forms';

export abstract class BaseModel {
  public formGroup: FormGroup;

  protected constructor(props?: any) {
    if (props) {
      Object.assign(this, props);
    }
    this.formGroup = this.createForm();
  }

  /**
   * Converts the array inside the base object into an array of the model
   * @param base
   */
  public abstract fromListJson(base: any): any[];

  /**
   * Converts the base object into a model object
   * @param base
   */
  public abstract fromItemJson(base: any): any;

  /**
   * Creates the form group for this model.
   */
  public abstract createForm(): FormGroup;

}
