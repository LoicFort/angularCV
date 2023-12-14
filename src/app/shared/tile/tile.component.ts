import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { TileModel } from '../models/tile.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tile',
  standalone: true,
  imports: [MatIconModule, NgFor],
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent {
  @Input() tile : TileModel; 
}
