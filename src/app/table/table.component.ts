import {Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-table',
  template: `
    <h2>
      Todo List:
    </h2>
    <ul>
      <li *ngFor="let item of list" (click)="onItemClick($event)">{{item.name}}</li>
    </ul>
  `,
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  onItemClick(e){
    console.log('Item Clicked');
    this.itemClick.emit({type: 'click', originalEvent: e});
  }

  @Input() list;
  @Output() itemClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
