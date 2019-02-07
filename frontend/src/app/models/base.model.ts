import { FormGroup } from '@angular/forms';

export abstract class BaseModel {
    // add shared properties here

    /**
     * assigns values to the model properties
     * @param input base object
     */
    public deserialize(input: any): any {
      Object.assign(this, input);
      return this;
    }

   /**
    * converting array of objects to an array of model by using deserialize()
    * @param base
    */
    public abstract fromListJson(base: any): Array<any>;

    /**
     * converts object to model by using the deserialize()
     * @param base base object
     */
    public abstract fromItemJson(base: any): Array<any>;

    /**
     * Creates the form group for validation for this model
     * @return {FormGroup}
     */
    public abstract createForm(): FormGroup;
}
