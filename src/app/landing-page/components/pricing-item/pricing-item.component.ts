import { Component, Input } from '@angular/core';

export interface PricingItem {
  title: string
  description: string
  price: {
    anual: number,
    monthly: number
  },
  buttonText: string
  features: string[]
  popular: boolean,
}

@Component({
  selector: 'app-pricing-item',
  templateUrl: './pricing-item.component.html',
  styleUrl: './pricing-item.component.scss'
})
export class PricingItemComponent {

  @Input({ required: true}) pricing!: PricingItem
  @Input({ required: true}) billAnually!: boolean

}
