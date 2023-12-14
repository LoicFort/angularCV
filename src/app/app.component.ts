import { Component } from '@angular/core'
import { WelcomeComponent } from './core/welcome/welcome.component'
import { AboutComponent } from './core/about/about.component'
import { ProjectsComponent } from './core/projects/projects.component'
import { ContactComponent } from './core/contact/contact.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AboutComponent, WelcomeComponent, ProjectsComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-cv'
}
