import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import {Label, BaseChartDirective, Color } from 'ng2-charts';
import { FactoryService } from '../../services/factory.service';

export interface daysOW  {
  id:any,
  day:any
}
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css','../../components/badge/badge.component.css']
})
export class PrincipalComponent implements OnInit {
  
  
  public Ototal = 0;
  public OPProcesar = 0;
  public OProcesadas = 0;
  public Oalmacenadas = 0;

  public l = 0;
  public m = 0;
  public mi = 0;
  public j = 0;
  public v = 0;
  public s = 0;
  public d = 0;

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
  public pieChartLabels: Label[] = ['Total', 'Pendientes', 'Recibidas', 'Almacenadas'];
  public pieChartData: number[] = [this.Ototal, this.OPProcesar, this.OProcesadas, this.Oalmacenadas];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = false;
  public pieChartPlugins: any = [];
  public daysO:daysOW[] = [];
  public pieChartColors = [
    {
      backgroundColor: ['#39ACED', '#8554EF', '#4EA466','#d6890dbe'],
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
  public barraChartData: number[] = [this.l, this.m, this.mi,this.j, this.v, this.s, this.d];
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
        
    // this.service.getPersona().subscribe( per => {
    //   console.log(per);
    // })
    // this.service.getUsuarios().subscribe( usr => {
    //   usr.forEach(user => {
    //     const {nombre, email} = user;
    //     console.log(`Nombre: ${nombre}`);
    //     console.log(`Email: ${email}`);
    //   })
    // })

    // this.getusr();
    
    //       console.log(window.innerHeight, window.innerWidth);
   }

  //  async getusr () {
  //     await this.service.getUsuario(2).subscribe( usr => {
  //       console.log(usr);
  //    })
  //  }
  //  enviar() {
  //   this.service.newPersona(this.persona).subscribe( per => {
  //     console.log(per);
  //   })
  //  }

  ngOnInit(): void {

    var Xmas95 = new Date('2022-08-22 23:40:19');
    var weekday = Xmas95.getDay();
    console.log(typeof(weekday));

    this.service.getOrden().subscribe(resp => {

      resp.forEach((element:any) => {
        let day = new Date(element.fecha).getDay()    
        
        switch(day) {
          case 0 :
            this.d+=1;
            
          break;

          case 1: 
            this.l+=1;
            console.log(this.l);
            break;
          case 2 :
            this.m+=1;
            break;
          case 3: 
            this.mi+=1;
            break;
          case 4 :
            this.j+=1;
            break;
          case 5: 
            this.v+=1;
            break;
          case 6: 
            this.s+=1;
        }
          var temp = {id:element.id,day:day}
          this.daysO.push(temp)
      });
      
      this.barraChartData = [this.l, this.m, this.mi,this.j, this.v, this.s, this.d];
    console.log(resp);
       this.Ototal = resp.length;
       this.service.getOrdenP().subscribe((respo:any) => {
          respo.forEach((element:any,i:any) => {           
              this.OPProcesar += 1;           
          })
          this.service.getOrdenR().subscribe(respoo=> {
            respoo.forEach((element:any,i:any) => {            
                 this.OProcesadas += 1;                 
                 this.Oalmacenadas = this.Ototal-this.OPProcesar-this.OProcesadas;
                 this.pieChartData = [this.Ototal, this.OPProcesar, this.OProcesadas, this.Oalmacenadas];
             })
          })
         
        }) 
        console.log(this.daysO);
      })
           
      
      
      
      }
      //  if()
      //  this.OPProcesar = resp.
 

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
