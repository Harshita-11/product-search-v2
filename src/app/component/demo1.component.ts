import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from '@angular/core';
import { DemoService } from '../service/demo1.service';
import { MessageService } from '../service/subscribemessage.service';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-demo',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class DemoComponent implements OnInit {
  demoTitle = 'I am the child component';
  mappedData: any; // from subject
  uniqueCategoryName: any;
  result: any;
  searchResult: any;
  default: String;
  searchForm: FormGroup;

  constructor(
    private messageService: MessageService,
    private demoService: DemoService
  ) {
    this.searchForm = new FormGroup({
      search: new FormControl(''),
      price: new FormControl(''),
      category: new FormControl()
    });
  }

  ngOnInit() {
    this.result = [];
    this.searchResult = {};
    this.messageService.getMessage().subscribe(msg => {
      this.mappedData = msg;
      // console.log('this.mappedData: ', this.mappedData);
      // this.cardLabels = Object.keys(this.mappedData[0]);
      // console.log(this.mappedData.map(data => data.categoryName).flat());
      // console.log(
      //   'this.subscribe msg*******',
      //   this.mappedData,
      //   this.cardLabels
      // );
      // console.log('demo mapped data', this.mappedData);
      this.uniqueCategoryName = this.mappedData
        .map(data => data.categoryName)
        .flat()
        .filter((item, index, flatArray) => flatArray.indexOf(item) === index);
      this.uniqueCategoryName.splice(0, 0, 'Select');
      this.default = this.uniqueCategoryName[0];
      // console.log('uniqueCategoryName: ', this.uniqueCategoryName);
      this.searchForm.controls['category'].setValue(this.default);
      this.searchForm.controls['price'].setValue('all');
    });

    this.messageService.getTab().subscribe(tab => {
      this.onReset();
    });
  }

  ngOnChange() {}

  onSubmit() {
    // console.log(this.searchForm.value);
    this.searchResult = this.searchForm.value;
    this.messageService.sendFilter(this.searchResult);
  }

  onReset() {
    this.searchForm.reset({ search: '', price: 'all', category: 'Select' });
    // console.log(this.searchForm.value);
    this.onSubmit();
  }
}
