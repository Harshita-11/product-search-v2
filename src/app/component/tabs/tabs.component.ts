import { Component, Input } from '@angular/core';

import { MessageService } from '../../service/subscribemessage.service';
import { IFilterObj, ITab } from '../../models/product.model';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  @Input() tabReference: IFilterObj;
  @Input() tabIndex: number;
  @Input() first: number;
  @Input() last: number;

  constructor(private messageService: MessageService) {}

  addRemoveTabData(action?: string): void {
    this.messageService.sendTab({
      index: this.tabIndex,
      action,
      tabData: this.tabReference
    } as ITab);
  }
}
