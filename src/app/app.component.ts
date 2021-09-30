import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cards = [
    {
      title: "Free",
      price: "$" + 0,
      user: "Single User",
      storage: "5GB Storage",
      public_project: "Unlimited Public Projects",
      community: "Community Access",
      private_project:
      {
        private_project: "Unlimited Private Projects",
        available: true
      },
      phone: {
        phone: "Dedicated Phone Support",
        available: true
      },
      subdomain: {
        subdomain: "Free Subdomain",
        available: true
      },
      status: {
        status: "Monthly Status Reports",
        available: true
      }
    },
    {
      title: "Plus",
      price: "$" + 9,
      user: "5 Users",
      storage: "50GB Storage",
      public_project: "Unlimited Public Projects",
      community: "Community Access",
      private_project:
      {
        private_project: "Unlimited Private Projects",
        available: false
      },
      phone: {
        phone: "Dedicated Phone Support",
        available: false
      },
      subdomain: {
        subdomain: "Free Subdomain",
        available: false
      },
      status: {
        status: "Monthly Status Reports",
        available: true
      }
    },
    {
      title: "Pro",
      price: "$" + 49,
      user: "Unlimited Users",
      storage: "150GB Storage",
      public_project: "Unlimited Public Projects",
      community: "Community Access",
      private_project: {
        private_project: "Unlimited Private Projects",
        available: false
      },
      phone: {
        phone: "Dedicated Phone Support",
        available: false
      },
      subdomain: {
        subdomain: "Unlimited Free Subdomains",
        available: false
      },
      status: {
        status: "Monthly Status Reports",
        available: false
      }
    }
  ]

}
