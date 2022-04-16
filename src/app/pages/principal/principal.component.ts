import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import {Label, BaseChartDirective, Color } from 'ng2-charts';
import { FactoryService } from '../../services/factory.service';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css','../../components/badge/badge.component.css']
})
export class PrincipalComponent implements OnInit {

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
  public pieChartLabels: Label[] = ['Aprobados', 'Pendientes', 'Denegados'];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = false;
  public pieChartPlugins: any = [];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(14,156,29,1)', 'rgba(219,73,73,1)', 'rgba(73,149,219,1)'],
    },
  ];
  public barraChartOptions: ChartOptions = {
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
    maintainAspectRatio: true

  };
  public barraChartLabels: Label[] = ['L', 'M', 'M','J', 'V', 'S','D'];
  public barraChartData: number[] = [250, 400, 220,305, 390, 190, 335];
  public barraChartType: ChartType = 'bar';
  public barraChartLegend = false;
  public barraChartPlugins: any = [];
  public barraChartColors = [
    {
      backgroundColor: 'rgba(54,94,194,1)',
    },
  ];
  persona = {
    "apellido": "Cabrera", 
    "cedula": "03115319034", 
    "estado_civil": "soltero", 
    "nombre": "David",
    "telefono": 8097808081  
  }
  constructor( private service: FactoryService) { 
        
    this.service.getPersona().subscribe( per => {
      console.log(per);
    })
    
          console.log(window.innerHeight, window.innerWidth);
   }

   enviar() {
    this.service.newPersona(this.persona).subscribe( per => {
      console.log(per);
    })
   }

  ngOnInit(): void {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  // changeLabels(): void {
  //   const words = ['hen', 'variable', 'embryo', 'instal', 'pleasant', 'physical', 'bomber', 'army', 'add', 'film',
  //     'conductor', 'comfortable', 'flourish', 'establish', 'circumstance', 'chimney', 'crack', 'hall', 'energy',
  //     'treat', 'window', 'shareholder', 'division', 'disk', 'temptation', 'chord', 'left', 'hospital', 'beef',
  //     'patrol', 'satisfied', 'academy', 'acceptance', 'ivory', 'aquarium', 'building', 'store', 'replace', 'language',
  //     'redeem', 'honest', 'intention', 'silk', 'opera', 'sleep', 'innocent', 'ignore', 'suite', 'applaud', 'funny'];
  //   const randomWord = () => words[Math.trunc(Math.random() * words.length)];
  //   this.pieChartLabels = Array.apply(null, { length: 3 }).map(_ => randomWord());
  // }
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 76, 85, 70,65, 59, 80, 81, 56, 55], label: 'Series A'},
  ];
  public lineChartLabels: Label[] = ['E', 'F', 'M', 'A', 'M', 'J', 'J','A','S','O','N','D'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = false;
  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective | undefined;

  // events
  public lineClicked({ event: any, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public lineHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
