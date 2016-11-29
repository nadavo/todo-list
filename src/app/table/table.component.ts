import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-table',
  template: `
    <h2>
      Todo List:
    </h2>
    <ul>
      <li *ngFor="let item of list">{{item.name}}</li>
    </ul>
  `,
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  private list = [
    {name: 'One'},
    {name: 'Two'},
    {name: 'Three'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
