import { Component, OnInit } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-presenca',
  templateUrl: './presenca.component.html',
  styleUrls: ['./presenca.component.css']
})
export class PresencaComponent implements OnInit {

  presencaAtual;

  constructor() { setTheme('bs3'); }

  ngOnInit() {
  }

  eventHandler(event) {
    if(event.key == "Enter"){
      // Constriuir conexão com banco...
      alert(this.presencaAtual)
      this.presencaAtual = null;
    }
 } 
  
}
