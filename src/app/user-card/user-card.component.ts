import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() myData = {
    title: "",
    price: "",
    user: "",
    storage: "",
    public_project: "",
    community: "",
    private_project:
    {
      private_project: "",
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
  }


  constructor() { }

  ngOnInit(): void {
  }

}
