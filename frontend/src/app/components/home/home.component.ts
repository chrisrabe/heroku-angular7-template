import { Component, OnInit } from '@angular/core';
import {ModalService} from "../../services/modal.service";
import {NotificationModalOption} from "../../models/modal.options.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.modalService.showNotification(
      new NotificationModalOption('Here is a message'));
  }

}
