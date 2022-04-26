import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

export interface TablaElement {
  ID: number;
  Proveedor: string;
  Fecha: string;
  Accion: string;

}

const ELEMENT_DATA: TablaElement[] = [
  {ID: 1, Proveedor: "Disponible",Fecha: "Fecha 1",Accion: ""},
  {ID: 1, Proveedor: "Ocupado",Fecha: "Fecha 2",Accion: ""},
  {ID: 1, Proveedor: "Disponible",Fecha: "Fecha 3",Accion: ""},
  {ID: 1, Proveedor: "Ocupado",Fecha: "Fecha 4",Accion: ""},
  {ID: 1, Proveedor: "Disponible",Fecha: "Fecha 5",Accion: ""},
  {ID: 1, Proveedor: "Ocupado",Fecha: "Fecha 6",Accion: ""},
  {ID: 1, Proveedor: "Disponible",Fecha: "Fecha 7",Accion: ""},
  {ID: 1, Proveedor: "Ocupado",Fecha: "Fecha 8",Accion: ""},
  {ID: 1, Proveedor: "Disponible",Fecha: "Fecha 9",Accion: ""},
];


@Component({
  selector: 'app-almacenar',
  templateUrl: './almacenar.component.html',
  styleUrls: ['./almacenar.component.css']
})
export class AlmacenarComponent implements OnInit {

  
  displayedColumns = ['ID', 'Proveedor', 'Fecha', 'Accion'];
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
