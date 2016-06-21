import {Component} from 'angular2/core'
import {OnInit} from 'angular2/core'
import {NgIf} from 'angular2/common';
import {NgForm} from 'angular2/common';

@Component({
  selector: 'puzzle',
  template: `
    <section class="setup">
      <h2>Game Setup</h2>
      Enter your name.
      <input type="text" #nameInput [(ngModel)]="name">
    </section>
    <section
    [ngClass]="{
      puzzle: true,
      correct: switch1.value == switch1Number && switch2.value == switch2Number && switch3.value == switch3Number && switch4.value == switch4Number
    }"
    *ngIf="nameInput.value">
      <h2>
        The Puzzle |
        {{switch1.value == switch1Number && switch2.value == switch2Number && switch3.value == switch3Number && switch4.value == switch4Number ? 'SOLVED' : 'NOT SOLVED'}}

      </h2>
      <p>Welcome, <span class="name">{{name}}</span></p>
      <br>
      Switch1:
      <input type="text" #switch1 (keyup)="0"><br><br>
      Switch2:
      <input type="text" #switch2 (keyup)="0"><br><br>
      Switch3:
      <input type="text" #switch3 (keyup)="0"><br><br>
      Switch4:
      <input type="text" #switch4 (keyup)="0"><br><br>

    </section>
    <h2 *ngIf="switch1.value == switch1Number && switch2.value == switch2Number && switch3.value == switch3Number && switch4.value == switch4Number" class="congrats">Congratulations, {{name}}! You did it!</h2>


  `,
  directives: [NgIf]
})

export class PuzzleComponent implements OnInit {
  name: string
  switch1Number: number
  switch2Number: number
  switch3Number: number
  switch4Number: number
  ngOnInit() {
    this.switch1Number = Math.round(Math.random())
    this.switch2Number = Math.round(Math.random())
    this.switch3Number = Math.round(Math.random())
    this.switch4Number = Math.round(Math.random())

    console.log(`${this.switch1Number}  ${this.switch2Number}  ${this.switch3Number}  ${this.switch4Number}`);
  }
}
