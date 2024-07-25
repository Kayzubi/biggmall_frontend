
export const paymentMethods: { name: string; icon: string }[] = [
  {
    name: 'visa',
    icon: 'assets/visa.svg',
  },
  {
    name: 'paystack',
    icon: 'assets/paystack-2.svg',
  },
  {
    name: 'flutterwave',
    icon: 'assets/flutterwave-2.svg',
  },
  {
    name: 'mastercard',
    icon: 'assets/mastercard.svg',
  },
  {
    name: 'stripe',
    icon: 'assets/stripe.svg',
  },
];

export interface FeatureItem {
  icon: string;
  heading: string;
  desc: string;
}

export const appFeatures: FeatureItem[] = [
  {
    icon: 'ionArchiveOutline',
    heading: 'Inventory Management',
    desc: 'Easilly keep track of your stock with built in inventory management.',
  },
  {
    icon: 'ionAnalyticsOutline',
    heading: 'Sales Reports',
    desc: 'Measure your sales performance with detailed sales reports broken down by product, date, discount code and more.',
  },
  {
    icon: 'ionTimeOutline',
    heading: 'Dedicated Support Team',
    desc: 'Maximize the potential of your store with our dedicated support team. Whether you need help via email, Facebook chat, Instagram direct message, or phone, we’re ready to assist you every step of the way.',
  },
];
