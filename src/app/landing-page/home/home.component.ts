import { Component } from '@angular/core';
import { appFeatures, paymentMethods } from '../landingpage.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  paymentChannels = paymentMethods;
  features = appFeatures;
}
