import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ModalText, NgxModalConfig } from '../_util/constants';
import { BaseModalOptions, NotificationModalOption, PromptModalOption } from '../models/modal.options.model';

export class ModalChangeEvent {
  public options: BaseModalOptions;
  public config?: NgxModalConfig;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  public readonly modalChange: EventEmitter<ModalChangeEvent> = new EventEmitter<ModalChangeEvent>();

  private open: boolean;

  private isSubmitDisabledSubject = new Subject<boolean>();
  public isSubmitDisabled: Observable<boolean> = this.isSubmitDisabledSubject.asObservable();

  /**
   * Shows a notification modal
   * @param options notification options
   */
  public showNotification(options: NotificationModalOption): void {
    if (options.submitButton === undefined) {
      options.submitButton = {
        click: () => this.closeModal(),
        text: ModalText.okay
      };
    }
    const config = {
      ignoreBackdropClick: true,
      keyboard: false
    };
    this.openModal(options, config);
  }

  /**
   * Shows a prompt modal
   * @param options prompt options
   */
  public showPrompt(options: PromptModalOption): void {
    if (options.cancelButton === undefined) {
      options.cancelButton = {
        click: () => this.closeModal(),
        text: ModalText.cancel
      };
    }
    this.openModal(options);
  }

  /**
   * Sets the disabled property of the submit button.
   * @param isSubmitButtonDisabled
   */
  public setSubmitButtonDisabled(isSubmitButtonDisabled: boolean): void {
    this.isSubmitDisabledSubject.next();
  }

  /**
   * Checks if the modal is open.
   * @returns {boolean} true if modal is open, false if not
   */
  public isOpen(): boolean {
    return this.open;
  }

  /**
   * Closes the modal
   */
  public closeModal(): void {
    this.modalChange.next(undefined);
    this.open = false;
  }

  /**
   * Opens a modal
   * @param options modal options
   * @param config modal configuration
   */
  private openModal(options: BaseModalOptions, config?: NgxModalConfig): void {
    this.modalChange.next({
      options,
      config
    });
    this.isSubmitDisabledSubject.next(false);
    this.open = true;
  }
}
