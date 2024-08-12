import { Route } from "@angular/router";
import { StoreDetailsComponent } from "./store-details/store-details.component";
import { ThemeComponent } from "./theme/theme.component";
import { SocialMediaComponent } from "./social-media/social-media.component";
import { BankAccountComponent } from "./bank-account/bank-account.component";

export const storefrontRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'details',
    pathMatch: 'full'
  },
  {
    path: 'details',
    component: StoreDetailsComponent
  },
  {
    path: 'theme',
    component: ThemeComponent
  },
  {
    path: 'socials',
    component: SocialMediaComponent
  },
  {
    path: 'bank-account',
    component: BankAccountComponent
  }
]
