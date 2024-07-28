import { Component } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.scss',
})
export class HowItWorksComponent {
  steps = [
    {
      step: 1,
      header: 'Sign Up',
      icon: 'Mobile login-rafiki.svg',
    },
    {
      step: 2,
      header: 'Create Store',
      icon: 'Ecommerce campaign-bro.svg',
    },
    {
      step: 3,
      header: 'Start selling',
      icon: 'Online shopping-bro.svg',
    },
  ];
}
