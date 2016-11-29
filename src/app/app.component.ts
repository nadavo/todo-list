import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: `
    <h1>
      {{title}}
    </h1>
    <h4>
      {{sub_title}}
    </h4>
    <todo-input></todo-input>
    <todo-table (itemClick)="onItemClick($event)" ></todo-table>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onItemClick(e){
    console.log('Event caught', e);
  }
  private title: string = 'Nadav\'s To-do List';
  private sub_title: string = 'Built with Angular 2';
}
