import { MathFactModel } from './../../models/MathFactModel';
import { FormBuilder, FormsModule, Validators, FormGroup, FormControl } from '@angular/forms';
import { NumbersApiService } from './../../services/numbers-api.service';
import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-math-facts',
  templateUrl: './math-facts.component.html',
  styleUrls: ['./math-facts.component.less']
})

export class MathFactsComponent implements OnInit {

  mathFactForm: FormGroup;
  numberControl: FormControl;
  fragmentControl: FormControl;

  mathFact;
  mathFactModel: MathFactModel;

  // regex = new RegExp('^[0-9]{1,5}');
  regex: RegExp = /^[0-9]{1,5}/;

  get number() {
    return this.mathFactForm.get('number');
  }

  get fragment() {
    return this.mathFactForm.get('fragment');
  }

  constructor(private numbersApiService: NumbersApiService,
    private formBuilder: FormBuilder) {
    this.mathFactForm = this.formBuilder.group({
      number: ['', Validators.required],
      fragment: ''
    });
  }

  ngOnInit() {
  }

  onSubmit(mathFactModel) {
    // using fetch to consume api
    // this.numbersApiService.getMathFact(mathFactModel).then(response => response.text())
    //   .then(data => {
    //     this.mathFact = data;
    //   });
    console.log(mathFactModel);
    console.log(this.mathFactForm.value);
  }
}
