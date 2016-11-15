/*import JS/Angular modules/interfaces*/
import { Component, OnInit } from '@angular/core';

/*Decorator - connects JS + HTML + CSS*/
@Component({
  selector: 'todo-input',
  /*backticks allow multi-line code*/
  template: `
    <h2>
      input Works!
    </h2>
  `,
  styleUrls: ['./input.component.css']
})
/*export our new component class to be used in our app*/
export class InputComponent implements OnInit {
/*initialize primitives for this class in constructor, not logic*/
  constructor() { }
/*runs each time this component is created*/
  ngOnInit() {
  }

}
