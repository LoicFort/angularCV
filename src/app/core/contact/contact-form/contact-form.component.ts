import { Component, type OnInit } from '@angular/core'
import { MatSelectModule } from '@angular/material/select'

import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Form, Validators, FormControl, AbstractControlOptions } from '@angular/forms'
import { type ContactFormModel } from 'src/app/shared/models/contact-form.model'

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
public contactForm: FormGroup<ContactFormModel>;

constructor(private formBuilder: FormBuilder) {}

  ngOnInit (): void {
    this.contactForm = this.formBuilder.group({
      name: this.formBuilder.control(null, Validators.required),
      mail: this.formBuilder.control(null ,[Validators.required, Validators.email]),
      message: this.formBuilder.control(null, Validators.required)
    });   
}

public submit(): void {
console.log(this.contactForm.getRawValue())
}
}
