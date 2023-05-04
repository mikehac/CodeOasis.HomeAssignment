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
  showValidationError: boolean = false;

  constructor(private robotService: RobotService) {}

  public send() {
    if (this.moves == '' || !this.isValidJSON(this.moves)) {
      this.showValidationError = true;
      return;
    }

    this.showValidationError = false;
    this.countDownInscrutions--;
    this.robotService.trackRobot(JSON.parse(this.moves)).subscribe(
      (location) => {
        this.movesList.push(location);
        this.moves = '';
      },
      (err) => {
        console.log(err);
      }
    );
  }
  private isValidJSON(moves: string): boolean {
    try {
      JSON.parse(moves);
    } catch (e) {
      return false;
    }
    return true;
  }
}
