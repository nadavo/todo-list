import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: `
    <h1>
      {{title}}
    </h1>
    <h4>
      {{subtitle}}
    </h4>
    <todo-input></todo-input>
    <todo-table></todo-table>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title: string = 'Nadav\'s To-do List';
  private subtitle: string = 'Built with Angular 2';
}
