import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

export interface TablaElement {
  ID: number;
  Proveedor: string;
  Fecha: string;

}

const ELEMENT_DATA: TablaElement[] = [
  {ID: 1, Proveedor: "Disponible",Fecha: "Fecha 1"},
  {ID: 1, Proveedor: "Ocupado",Fecha: "Fecha 2"},
  {ID: 1, Proveedor: "Disponible",Fecha: "Fecha 3"},
  {ID: 1, Proveedor: "Ocupado",Fecha: "Fecha 4"},
  {ID: 1, Proveedor: "Disponible",Fecha: "Fecha 5"},
  {ID: 1, Proveedor: "Ocupado",Fecha: "Fecha 6"},
  {ID: 1, Proveedor: "Disponible",Fecha: "Fecha 7"},
  {ID: 1, Proveedor: "Ocupado",Fecha: "Fecha 8"},
  {ID: 1, Proveedor: "Disponible",Fecha: "Fecha 9"},
];


@Component({
  selector: 'app-recibir',
  templateUrl: './recibir.component.html',
  styleUrls: ['./recibir.component.css']
})
export class RecibirComponent implements OnInit {

  displayedColumns = ['ID', 'Proveedor', 'Fecha'];
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
