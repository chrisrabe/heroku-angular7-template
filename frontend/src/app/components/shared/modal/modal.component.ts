import {Component, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ModalChangeEvent, ModalService} from "../../../services/modal.service";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {Subscription} from "rxjs";
import {ModalText, ModalType} from "../../../_util/constants";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {
  @ViewChild('notification')
  public notificationTemplate: TemplateRef<any>;
  @ViewChild('prompt')
  public promptTemplate: TemplateRef<any>;

  public modalOptions: any;
  public isSubmitDisabled: boolean;
  public modalText: typeof ModalText = ModalText;

  private modalReference: BsModalRef;

  private subscriptions: Subscription = new Subscription();

  constructor(private modalService: ModalService,
              private bsModalService: BsModalService) {
  }

  public ngOnInit(): void {
    // add modal change listeners
    this.subscriptions.add(this.modalService.modalChange.subscribe(async (event: ModalChangeEvent) => {
      if (event) {
        this.modalOptions = await event.options;
        if (event.options.type === ModalType.prompt) {
          this.modalReference = this.bsModalService.show(this.promptTemplate, event.config);
        } else if (event.options.type === ModalType.notification) {
          this.modalReference = this.bsModalService.show(this.notificationTemplate, event.config);
        }
      } else {
        if (this.modalReference) {
          this.modalReference.hide();
        }
      }
    }));
    // add submit button disabled listener
    this.subscriptions.add(this.modalService.isSubmitDisabled.subscribe(isSubmitDisabled => {
      this.isSubmitDisabled = isSubmitDisabled;
    }));
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public submitButtonClicked(): void {
    if (this.modalOptions.submitButton) {
      this.modalOptions.submitButton.click();
    }
  }

  public cancelButtonClicked(): void {
    if (this.modalOptions.cancelButton) {
      this.modalOptions.cancelButton.click();
    }
  }
}
