import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { dataSeries } from './dataSeries';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  series: Array<Serie> = [];
  
  constructor() { }

  getSerieList(): Array<Serie> {
    return dataSeries;
  }

  getAverage(): number{
    let numSeasons: number = 0;
    let numSeries: number = 0; 
    for (const serie of this.series){
      numSeries = numSeries+1;
      numSeasons = numSeasons + serie.temporadas;
    }
   return Math.round(numSeasons/numSeries); 
  }
  
  ngOnInit() {
    this.series = this.getSerieList();
  }

}
