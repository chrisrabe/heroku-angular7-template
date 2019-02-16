import { TemplateRef } from '@angular/core';
import { ModalType } from '../_util/constants';

/**
 * Action handlers for buttons in the modal.
 */
export class ModalActionHandler {
  public click: () => void;
  public text: string;
  public style?: string;
}

/**
 *  Contains the title and the submit action handlers.
 *  The displayed modal is determined by the modal type argument.
 */
export abstract class BaseModalOptions {
  public title: string;
  public type: ModalType;
  public submitButton: ModalActionHandler;
}

/**
 * Displays a custom notification to the user.
 */
export class NotificationModalOption extends BaseModalOptions {
  public message: string;

  constructor(message: string, submitButton?: ModalActionHandler) {
    super();
    this.title = 'Notification';
    this.type = ModalType.notification;
    this.message = message;
    this.submitButton = submitButton;
  }
}

/**
 * This modal is used for displaying modals with form inputs
 * and custom content.
 */
export class PromptModalOption extends BaseModalOptions {
  public content: TemplateRef<any>;
  public cancelButton?: ModalActionHandler;

  constructor(title: string,
              content: TemplateRef<any>,
              submitButton: ModalActionHandler,
              cancelButton?: ModalActionHandler) {
    super();
    this.title = title;
    this.type = ModalType.prompt;
    this.content = content;
    this.submitButton = submitButton;
    this.cancelButton = cancelButton;
  }
}
