import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  goals: Array<object> = [new Goal("Visit a gallery")];
  total: number = this.goals.length;

  goal = new Goal('');

  constructor() { }

  addNewGoal = function() {
    this.goals.push(this.goal);
    this.goal = new Goal('');
    this.updateTotalCount();
  }

  removeGoal = function(goal) {
    this.goals = this.goals.filter((item) => item.title !== goal.title);
    this.updateTotalCount();
  }

  updateTotalCount() {
    this.total = this.goals.length;
  }

  ngOnInit() {
  }

}

class Goal {
  constructor(
    public title: string
  ){}
}
