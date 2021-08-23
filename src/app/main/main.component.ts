import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  title = 'rock-paper-scissors';

  showChoices = true;

  paperSvg = '../assets/images/icon-paper.svg';
  scissorsSvg = '../assets/images/icon-scissors.svg';
  rockSvg = '../assets/images/icon-rock.svg';

  possibleChoices = ['paper', 'scissors', 'rock'];
  computerChoice = '';
  userChoice = '';
  result = '';
  score = 0;
  @Output() public totalScore = new EventEmitter<number>();

  generateComputerChoice() {
    this.computerChoice =
      this.possibleChoices[
        Math.floor(Math.random() * this.possibleChoices.length)
      ];
  }

  checkWinner(userChoice: string) {
    this.generateComputerChoice();
    this.userChoice = userChoice;

    if (userChoice == this.computerChoice) {
      this.result = 'draw';
    } else if (
      (userChoice == 'paper' && this.computerChoice == 'rock') ||
      (userChoice == 'rock' && this.computerChoice == 'scissors') ||
      (userChoice == 'scissors' && this.computerChoice == 'paper')
    ) {
      this.result = 'you win';
      this.score += 1;
      this.emitScore()
    } else {
      this.result = 'you lose';
    }
  }

  emitScore() {
    this.totalScore.emit(this.score);
  }

  constructor() {}

  ngOnInit(): void {
    this.emitScore()
  }
}
