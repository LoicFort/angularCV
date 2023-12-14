import { NgFor } from '@angular/common'
import { Component, type OnInit } from '@angular/core'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { type TechnoModel } from 'src/app/shared/models/techno.model'

@Component({
  selector: 'app-technos',
  standalone: true,
  imports: [MatProgressBarModule, NgFor],
  templateUrl: './technos.component.html',
  styleUrls: ['./technos.component.scss']
})
export class TechnosComponent implements OnInit {
  public technos: TechnoModel[]

  ngOnInit (): void {
    this.technos = [
      {
        title: 'html',
        level: 80
      },
      {
        title: 'scss',
        level: 80
      },
      {
        title: 'javascript',
        level: 80
      },
      {
        title: 'typescript',
        level: 80
      },
      {
        title: 'java',
        level: 60
      },
      {
        title: 'spring',
        level: 60
      },
      {
        title: 'postgreSQL',
        level: 70
      },
      {
        title: 'git',
        level: 80
      },
      {
        title: 'scrum',
        level: 80
      }
    ]
  };
}
