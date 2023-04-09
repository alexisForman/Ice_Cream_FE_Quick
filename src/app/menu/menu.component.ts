import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
organic = false;
nonOrganic = false;

  constructor() { }

  ngOnInit(): void {
  }

  showOrganics(){
    this.organic = true;
    this.nonOrganic = false;
    console.log("Organic is now set to true, non organic is set to false.");


  };

  showNonOrganics(){
    this.nonOrganic = true;
    this.organic = false;
  }
}
