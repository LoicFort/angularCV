import { Component } from '@angular/core';
import { TilesComponent } from '../tiles/tiles.component';
import { PresentationComponent } from '../presentation/presentation.component';
import { TechnosComponent } from '../technos/technos.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [PresentationComponent,TechnosComponent, TilesComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

}
