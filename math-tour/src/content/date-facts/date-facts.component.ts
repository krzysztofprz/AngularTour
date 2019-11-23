import { DateFactModel } from './../../models/DateFactModel';
import { NumbersApiService } from './../../services/numbers-api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-date-facts',
  templateUrl: './date-facts.component.html',
  styleUrls: ['./date-facts.component.css']
})

export class DateFactsComponent implements OnInit {

  dateFactForm;
  dateFact;

  selectedMonth = 'Select Month';
  selectedDay: string | number = 'Select Day';

  readonly days = Array.from({ length: 31 }, (v, k) => k + 1);

  readonly months = [{ id: 1, name: 'January' }, { id: 2, name: 'February' }, { id: 3, name: 'March' },
  { id: 4, name: 'April' }, { id: 5, name: 'May' }, { id: 6, name: 'June' },
  { id: 7, name: 'July' }, { id: 8, name: 'August' }, { id: 9, name: 'September' },
  { id: 10, name: 'October' }, { id: 11, name: 'November' }, { id: 12, name: 'December' }];

  constructor(private numbersApiService: NumbersApiService,
    private formBuilder: FormBuilder) {
    this.dateFactForm = this.formBuilder.group({
      month: '',
      day: ''
    });
  }

  ngOnInit() {
    // using fetch to consume api
    // this.dateFact = this.numbersApiService.getDateFact().then(res => this.dateFact = res);

    // using httpClient and observable to consume api
    // this.numbersApiService.getDateFact().subscribe((data) => {
    //   this.dateFact = data;
    // });
  }

  onSubmit() {
    let dateFactModel: DateFactModel = { day: +this.selectedDay, month: this.months.find(x => x.name === this.selectedMonth).id };
    console.log(dateFactModel);
    this.numbersApiService.getDateFact(dateFactModel).subscribe((data) => {
      this.dateFact = data;
    });
    this.dateFactForm.reset();
  }

  selectMonthFunc(month: string) {
    this.selectedMonth = month;
  }

  selectDayFunc(day: number) {
    this.selectedDay = day;
  }
}
