import { Component } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss'
})
export class SocialMediaComponent {

  socialLinks: { name: string, icon: string}[]

  constructor () {
    this.socialLinks = [
      {
        name: 'x(twitter)',
        icon: 'ionLogoTwitter',
      },
      {
        name: 'facebook',
        icon: 'ionLogoFacebook',
      },
      {
        name: 'instagram',
        icon: 'ionLogoInstagram',
      },
      {
        name: 'youtube',
        icon: 'ionLogoYoutube',
      },
    ];
  }

}
