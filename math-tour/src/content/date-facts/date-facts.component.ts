import { DateFactModel } from './../../models/DateFactModel';
import { NumbersApiService } from './../../services/numbers-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-facts',
  templateUrl: './date-facts.component.html',
  styleUrls: ['./date-facts.component.css']
})

export class DateFactsComponent implements OnInit {

  dateFact = 'Here will be a fact about date :)';

  submitted = false;

  model = new DateFactModel();

  days;

  readonly months = [{ id: 1, name: 'January' }, { id: 2, name: 'February' }, { id: 3, name: 'March' },
  { id: 4, name: 'April' }, { id: 5, name: 'May' }, { id: 6, name: 'June' },
  { id: 7, name: 'July' }, { id: 8, name: 'August' }, { id: 9, name: 'September' },
  { id: 10, name: 'October' }, { id: 11, name: 'November' }, { id: 12, name: 'December' }];

  constructor(private numbersApiService: NumbersApiService) {
  }

  get diagnostic() { return JSON.stringify(this.model); }

  ngOnInit() {
  }

  updateDates(m) {
    if (m === 'May') {
      this.days = Array.from({ length: 5 }, (v, k) => k + 1);
    } else {
      this.days = Array.from({ length: 31 }, (v, k) => k + 1);
    }
  }

  onSubmit() {
    // using using httpClient and observable to consume api by subscribing
    this.numbersApiService.getDateFact(this.model).subscribe((data) => {
      this.dateFact = data;
    });
    this.submitted = true;
  }
}
