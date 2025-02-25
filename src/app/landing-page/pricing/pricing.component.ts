import { Component } from '@angular/core';
import { PricingItem } from '../components/pricing-item/pricing-item.component';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss',
})
export class PricingComponent {
  isAnnual: boolean = true;

  pricingItems: PricingItem[] = [
    {
      title: 'Free',
      description: 'For individuals and small businesses',
      buttonText: 'Get Started for Free',
      price: { anual: 0, monthly: 0 },
      features: [
        'Unlimited products and customers',
        'Multiple payment providers',
        'Advanced discount options',
        'Lorem ipsum dolor sit amet.',
      ],
      popular: false,
    },
    {
      title: 'Plus',
      description: 'For fast-growing businesses',
      buttonText: 'Get Started with Plus',
      price: { anual: 8000, monthly: 10000 },
      features: [
        'Everythin in Free',
        'Lorem ipsum dolor sit amet.',
        'Lorem ipsum dolor sit amet.',
        'Lorem ipsum dolor sit amet.',
        'Lorem ipsum dolor sit amet.',
      ],
      popular: true,
    },
    {
      title: 'Pro',
      description: 'For established businesses.',
      buttonText: 'Request Demo',
      price: { anual: 16000, monthly: 20000 },
      features: [
        'Everythin in Plus',
        'Lorem ipsum dolor sit amet.',
        'Lorem ipsum dolor sit amet.',
        'Lorem ipsum dolor sit amet.',
        'Lorem ipsum dolor sit amet.',
        'Lorem ipsum dolor sit amet.',
        'Lorem ipsum dolor sit amet.',
      ],
      popular: false,
    },
  ];
}
