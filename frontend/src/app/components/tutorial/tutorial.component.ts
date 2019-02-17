import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {TutorialModel} from "../../models/tutorial.modal";
import {ModalService} from "../../services/modal.service";
import {PromptModalOption} from "../../models/modal.options.model";
import {ModalText} from "../../_util/constants";

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {
  @Input()
  public tutorial: TutorialModel;
  @ViewChild('links')
  public linkTemplate: TemplateRef<any>;

  public imageUrl: string;

  constructor(private modalService: ModalService) {
  }

  public ngOnInit(): void {
    if (this.tutorial) {
      this.imageUrl = `../../assets/images/${this.tutorial.type}.svg`;
    }
  }

  public openModal(): void {
    this.modalService.showPrompt(new PromptModalOption(
      this.tutorial.title,
      this.linkTemplate,
      {
        click: () => this.modalService.closeModal(),
        text: ModalText.okay,
        style: 'btn-primary'
      },
    ));
  }
}
