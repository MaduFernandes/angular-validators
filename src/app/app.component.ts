import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public tipoNormativoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    2;
    this.initializeForm();
  }

  initializeForm(): void {
    this.tipoNormativoForm = this.formBuilder.group({
      pesoNormativo: [
        null,
        [Validators.required, Validators.min(1), Validators.max(3)],
      ],
      pesoNaoNormativo: [
        null,
        [Validators.required, Validators.min(1), Validators.max(10)],
      ],
    });
  }

  validationForm(): void {
    console.log(this.tipoNormativoForm);
  }
}
