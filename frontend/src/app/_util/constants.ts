// === [Modal Constants] ===

/**
 * Different modal types for this template.
 */
export enum ModalType {
  notification = 'notification',
  prompt = 'prompt',
}

/**
 * ngx-bootstrap modal config.
 * @see {@link https://valor-software.com/ngx-bootstrap/#/modals#modal-options}
 */
export class NgxModalConfig {
  public animated?: boolean; // toggle animation
  public backdrop?: boolean; // modal-backdrop element
  public ignoreBackdropClick?: boolean; // ignore backdrop click
  public initialiseState?: object; // modal data
  public keyboard?: boolean; // closes the modal when esc key pressed
  public show?: boolean; // shows the modal when initialised
}

/**
 * Button modal text
 */
export enum ModalText {
  cancel = 'Cancel',
  submit = 'Submit',
  okay = 'Okay',
}
