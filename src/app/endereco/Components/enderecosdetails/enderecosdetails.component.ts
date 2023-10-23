import { Endereco } from './../../endereco';
import { EnderecoService } from './../../Service/endereco.service';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';

@Component({
  selector: 'app-enderecosdetails',
  templateUrl: './enderecosdetails.component.html',
  styleUrls: ['./enderecosdetails.component.scss']
})
export class EnderecosdetailsComponent {

  @Input() endereco: Endereco = new Endereco();
  @Output() retorno = new EventEmitter<Endereco>();

  enderecoService = inject(EnderecoService);


  salvar(){

    this.retorno.emit(this.endereco);

    // this.enderecoService.verify(this.endereco).subscribe({
    //   next: endereco =>{
    //     this.retorno.emit(endereco);
    //   },
    //   error: erro =>{
    //     alert("Errro, olhar no console");
    //     console.log(erro);
    //   }
    // });

  }

}
