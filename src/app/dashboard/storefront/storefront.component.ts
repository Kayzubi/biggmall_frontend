import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-storefront',
  templateUrl: './storefront.component.html',
  styleUrl: './storefront.component.scss'
})
export class StorefrontComponent {
  storefrontRoutes: MenuItem[]

  constructor () {
    this.storefrontRoutes = [
      {
        label: 'Store Details',
        icon: 'ionStorefrontOutline',
        routerLink: '/dashboard/store/details',
        routerLinkActiveOptions: { exact: true },
      },
      {
        label: 'Store Theme',
        icon: 'ionColorPaletteOutline',
        routerLink: '/dashboard/store/theme',
        routerLinkActiveOptions: { exact: true },
      },
      {
        label: 'Social Media',
        icon: 'ionLogoTwitter',
        routerLink: '/dashboard/store/socials',
        routerLinkActiveOptions: { exact: true },
      },
      {
        label: 'Remittance Account',
        icon: 'ionWalletOutline',
        routerLink: '/dashboard/store/bank-account',
        routerLinkActiveOptions: { exact: true },
      },
    ];
  }


}
