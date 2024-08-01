import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  navlinks: MenuItem[]



  constructor (private router: Router) {
    this.navlinks = [
      {
        label: 'Overview',
        icon: 'ionHomeOutline',
        routerLink: '/dashboard',
        routerLinkActiveOptions: { exact: true },
      },
      {
        label: 'Orders',
        icon: 'ionTrendingUpOutline',
        routerLink: '/dashboard/orders',
        routerLinkActiveOptions: { exact: false },
      },
      {
        label: 'Inventory',
        icon: 'ionFileTrayStackedOutline',
        routerLink: '/dashboard/products',
        routerLinkActiveOptions: { exact: false },
      },
      {
        label: 'Categories',
        icon: 'ionLayersOutline',
        routerLink: '/dashboard/categories',
        routerLinkActiveOptions: { exact: false },
      },
      {
        label: 'Customers',
        icon: 'ionPeopleOutline',
        routerLink: '/dashboard/customers',
        routerLinkActiveOptions: { exact: false },
      },
      {
        label: 'Discounts',
        icon: 'ionPricetagsOutline',
        routerLink: '/dashboard/discounts',
        routerLinkActiveOptions: { exact: false },
      },
      {
        label: 'Storefront',
        icon: 'ionStorefrontOutline',
        routerLink: '/dashboard/store',
        routerLinkActiveOptions: { exact: false },
      },
    ];
  }
}
