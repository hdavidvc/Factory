import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if(event.target.innerWidth < 811 ) {
      this.menu_open = false;
      console.log(this.menu_open);
   }else {
    this.menu_open = true;
    console.log(this.menu_open);
   }
  }
  constructor() {
     console.log(this.open);
     
    }

  open: string = ' ';
  menu_open: boolean = true;
  ngOnInit(): void {
  }

  abrir(option: string) {
    
    this.open = option;
    console.log(this.open);
  }
  open_menu() {
    this.menu_open = !this.menu_open;
    console.log(this.menu_open);
  }
}
