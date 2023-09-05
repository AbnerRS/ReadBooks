import { ConsultaCepService } from './../service/consulta-cep.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private router: Router, private consultaCepService: ConsultaCepService) { }

  ngOnInit(): void {
  }

  consultaCEP(ev: any){
    const cep = ev.target.value;
    return this.consultaCepService.getConsultaCep(cep).subscribe(resultado => console.log(resultado));
  }

  cadastrar(form: NgForm){
    if(form.valid){
      this.router.navigate(['/sucesso'])
    }else{
      alert('Formulário Inválido')
    }
  }
}
