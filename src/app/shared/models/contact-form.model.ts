import { type EmailValidator, type FormControl } from '@angular/forms'

export class ContactFormModel {
  name: FormControl<string>
  mail: FormControl<string>
  message: FormControl<string>
}
