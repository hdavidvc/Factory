import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';


@Component({
  selector: 'app-almacenar',
  templateUrl: './almacenar.component.html',
  styleUrls: ['./almacenar.component.css']
})
export class AlmacenarComponent implements OnInit {

  
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value: any, ctx: any) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    },
    
  };
  public pieChartLabels: Label[] = ['Aprobados', 'Pendientes'];
  public pieChartData: number[] = [300, 500];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = false;
  public pieChartPlugins: any = [];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(14,156,29,1)', 'rgba(219,73,73,1)'],
    },
  ];

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
