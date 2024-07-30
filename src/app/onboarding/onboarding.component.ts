import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.scss',
})
export class OnboardingComponent implements OnInit {
  activeStep: number

  onboardingSteps = [
    {
      step: 1,
      title: 'Create Store',
      canSkip: false,
    },
    {
      step: 2,
      title: 'Store Details',
      canSkip: false,
    },
    {
      step: 3,
      title: 'Add Product',
      canSkip: false,
    },
    {
      step: 4,
      title: 'Add Account',
      canSkip: true,
    },
    {
      step: 5,
      title: 'Launch Store',
    },
  ];

  constructor () {
    this.activeStep = 0
  }

  ngOnInit(): void {
  }


}
