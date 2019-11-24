import { MathFactModel } from './../../models/MathFactModel';
import { FormBuilder, FormsModule } from '@angular/forms';
import { NumbersApiService } from './../../services/numbers-api.service';
import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-math-facts',
  templateUrl: './math-facts.component.html',
  styleUrls: ['./math-facts.component.css']
})

export class MathFactsComponent implements OnInit {

  mathFact;
  mathFactModel: MathFactModel;

  mathFactForm: any;

  constructor(private numbersApiService: NumbersApiService,
    private formBuilder: FormBuilder) {
    this.mathFactForm = this.formBuilder.group({
      number: '',
      fragment: ''
    });
  }

  ngOnInit() {
  }

  onSubmit(mathFactModel) {
    // using fetch to consume api
    this.numbersApiService.getMathFact(mathFactModel).then(response => response.text())
      .then(data => {
        this.mathFact = data;
      });
  }
}
