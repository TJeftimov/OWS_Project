import { Component, OnInit } from '@angular/core';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-ticket-buying',
  templateUrl: './ticket-buying.component.html',
  styleUrls: ['./ticket-buying.component.css']
})
export class TicketBuyingComponent implements OnInit {

  buttonOptions = {
    text: 'Buy tickets',
    type: 'default',
    useSubmitBehavior: true
  };

  ticketNumbers = [
    '1', '2', '3', '4'
  ];

  quadrants = [
    'North - 30 seats remaining',
    'East - 20 seats remaining',
    'West - 24 seats remaining',
    'South - 10 seats remaining'
  ];

  constructor() { }

  ngOnInit() {
  }

  onFormSubmit(e) {
    notify(
      { message: 'Your tickets have been sent to your e-mail address!'},
      'success',
      3000
    );

    e.preventDefault();

  }

}
