import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

export interface TablaElement {
  ID: number;
  Materia_prima: string;
  Cantidad: number;

}

const ELEMENT_DATA: TablaElement[] = [
  {ID: 1, Materia_prima: "Disponible",Cantidad: 1},
  {ID: 1, Materia_prima: "Ocupado",Cantidad: 1},
  {ID: 1, Materia_prima: "Disponible",Cantidad: 1},
  {ID: 1, Materia_prima: "Ocupado",Cantidad: 1},
  {ID: 1, Materia_prima: "Disponible",Cantidad: 1},
  {ID: 1, Materia_prima: "Ocupado",Cantidad: 1},
  {ID: 1, Materia_prima: "Disponible",Cantidad: 1},
  {ID: 1, Materia_prima: "Ocupado",Cantidad: 1},
  {ID: 1, Materia_prima: "Disponible",Cantidad: 1},
];

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  displayedColumns = ['ID', 'Materia prima', 'Cantidad'];
  dataSource = ELEMENT_DATA;
  
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
