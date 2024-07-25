import { Component, Input } from '@angular/core';
import { FeatureItem } from '../../landingpage.models';




@Component({
  selector: 'app-feature-item',
  templateUrl: './feature-item.component.html',
  styleUrl: './feature-item.component.scss'
})
export class FeatureItemComponent {
  @Input({ required: true }) feature!: FeatureItem

}
