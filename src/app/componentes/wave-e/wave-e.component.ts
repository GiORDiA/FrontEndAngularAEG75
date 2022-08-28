import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-wave-e',
  templateUrl: './wave-e.component.html',
  styleUrls: ['./wave-e.component.css']
})
export class WaveEComponent implements OnInit {

  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos();
  }

}
