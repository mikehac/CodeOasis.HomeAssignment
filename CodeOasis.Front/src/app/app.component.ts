import { Component } from '@angular/core';
import { RobotService } from './robot.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  moves: string = '';
  countDownInscrutions: number = 15;
  movesList: string[][] = [];

  constructor(private robotService: RobotService) {}

  public send() {
    if (this.moves != '') {
      this.countDownInscrutions--;
      this.robotService
        .trackRobot(JSON.parse(this.moves))
        .subscribe((location) => {
          this.movesList.push(location);
        });
    }
  }
}
