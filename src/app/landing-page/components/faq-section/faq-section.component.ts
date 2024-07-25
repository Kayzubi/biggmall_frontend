import { Component } from '@angular/core';

@Component({
  selector: 'app-faq-section',
  templateUrl: './faq-section.component.html',
  styleUrl: './faq-section.component.scss'
})
export class FaqSectionComponent {
  questions: string[]


  constructor () {
    this.questions = Array.from({ length: 5}).map((_, index) => index.toString())
  }
}
