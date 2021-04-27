import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testeMenu';
  nome: string = '';
  
  onInit(){
    this.nome = "sesbatia" 
    console.log(this.nome)
  }

}
 