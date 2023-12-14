import { Component } from '@angular/core'
import { ContactFormComponent } from './contact-form/contact-form.component'

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

}
