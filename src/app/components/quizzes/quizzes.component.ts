import { Component, OnInit } from '@angular/core';
import quizz_questions from '../../../assets/data/quizz_questions.json';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css'],
})
export class QuizzesComponent {
  title: string = '';
  questions: any;
  questionSelected: any;

  answers: string[] = [];
  answerSelected: string = '';

  questionIndex: number = 0;
  questionMaxIndex: number = 0;

  finished: boolean = false;

  response: string = '';

  constructor() {}

  ngOnInit(): void {
    if (quizz_questions) {
      this.finished = false;
      this.title = quizz_questions.title;
      this.questions = quizz_questions.questions;
      this.questionSelected = this.questions[this.questionIndex];

      this.questionIndex = 0;
      this.questionMaxIndex = this.questions.length;
    }
  }

  playerChoice(value: string) {
    this.answers.push(value);
    this.nextStep();
  }

  nextStep() {
    this.questionIndex += 1;
    if (this.questionIndex > this.questionMaxIndex - 1) {
      this.finished = true;
      this.result();
    } else {
      this.questionSelected = this.questions[this.questionIndex];
    }
  }

  result() {
    const resultado: any = this.answers.reduce(
      (contador: any, elemento: any) => {
        if (contador[elemento]) {
          contador[elemento]++;
        } else {
          contador[elemento] = 1;
        }
        return contador;
      },
      {}
    );
    if (resultado.A > resultado.B) {
      this.response = quizz_questions.results.A;
    } else {
      this.response = quizz_questions.results.B;
    }
  }
}
