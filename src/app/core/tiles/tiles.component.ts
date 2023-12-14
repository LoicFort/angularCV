import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TileModel } from 'src/app/shared/models/tile.model';
import { TileComponent } from 'src/app/shared/tile/tile.component';


@Component({
  selector: 'app-tiles',
  standalone: true,
  imports: [TileComponent, NgFor],
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.scss']
})
export class TilesComponent implements OnInit { 
 public tiles : TileModel[];

 ngOnInit(): void {
  this.tiles = [
    {
      icon: "psychology",
      title: "Focus on UX",
      label: "psychology",
      description:"Best experience priority"
    },
    {
      icon: "handshake",
      title: "Enthusiastic",
      label: "handshake",
      description:"Easy to work with"
    },
    {
      icon: "build",
      title: "Simplicity",
      label: "label",
      description:"Not fancy but understandable code"
    },
  ]
}



}
