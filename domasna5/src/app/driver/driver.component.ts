import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Driver } from '../module/klasa';
import {NgIf} from '@angular/common'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-driver',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './driver.component.html',
  styleUrl: './driver.component.css'
})
export class DriverComponent implements OnInit {
  constructor(){}
  @Input()
  ime:String="";
  @Input()
  category:String="";

  @Input()
  vozac:Driver={} as Driver;

  @Input()
  reden:Number=0;

  @Output()
  cuci =  new EventEmitter<any>();
  ngOnInit(){

  }

  klasi(){
    return{'poz':true, 'course-card':true}
  }
  //'poz':this.vozac.name=="..."
  stil(){
    return {'color': 'red'}
  }
  stil2(){
    return {'background-color': 'blue'}
  }

  klik(){
    var link=this.vozac.iconUrl;
    window.open(link, "_blank")
    console.log("Me klikna");
    this.cuci.emit(this.vozac);
  }
  
}
