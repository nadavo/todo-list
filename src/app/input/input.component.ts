/*import JS/Angular modules/interfaces*/
import { Component, OnInit } from '@angular/core';

/*Decorator - connects JS + HTML + CSS*/
@Component({
  selector: 'todo-input',
  /*backticks allow multi-line code*/
  template: `
    <h2>
      {{title}}
    </h2>
    <input [placeholder]="inputTextGenerator()" (keyup)="changeTitle($event.target.value)" #myInput>
    <button (click)="changeTitle(myInput.value + ' - Save Button Clicked!')">
    Save
    </button>
  `,
  styleUrls: ['./input.component.css']
})
/*export our new component class to be used in our app*/
export class InputComponent implements OnInit {

  private title: string = '';

  changeTitle(newTitle:string): void {
    this.title = newTitle;
  }
  /*initialize primitives for this class in constructor, not logic*/
  constructor() {
    console.log('constructing InputComponent');
    this.changeTitle('Input Component Works!');
    console.log('title should be: Input Component Works!');
  }
/*runs each time this component is created*/
  ngOnInit() {}
  inputTextGenerator(){
    return 'Add a task here';
  }
}
