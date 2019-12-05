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

  mathFact = 'Here will be fact about math :)';

  mathFactForm = this.formBuilder.group({
    number: new FormControl('', Validators.required),
    fragment: new FormControl('')
  });

  get number() { return this.mathFactForm.get('number'); }
  get fragment() { return this.mathFactForm.get('fragment'); }

  constructor(private numbersApiService: NumbersApiService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
  }

  onSubmit() {
    // using fetch to consume api
    this.numbersApiService.getMathFact(this.mathFactForm.value).then(response => response.text())
      .then(data => {
        this.mathFact = data;
      });

    console.log(this.mathFactForm.value);
  }
}
