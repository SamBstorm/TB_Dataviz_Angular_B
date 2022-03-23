import { Component, OnInit } from '@angular/core';
import { IDatas } from 'src/app/models/chart/idatas';
import { DatavisApiChartService } from 'src/app/services/datavis-api-chart.service';

@Component({
  selector: 'app-chart-product',
  templateUrl: './chart-product.component.html',
  styleUrls: ['./chart-product.component.scss']
})
export class ChartProductComponent implements OnInit {

  public chartData : IDatas[] = [];
  public chartLabel: string[] = [];
  constructor(private _apiChart : DatavisApiChartService) { }

  ngOnInit(): void {
    this._apiChart.getDatas().subscribe(
      {
        next : data => this.chartData = data
      }
    )
    this._apiChart.getLabels().subscribe(
      {
        next : data => this.chartLabel = data
      }
    )
    
  }

}
