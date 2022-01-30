import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.component.html',
  styleUrls: ['./promocoes.component.sass']
})
export class PromocoesComponent implements OnInit {

  @ViewChild('modalCadastro') modalCadastroRef: any;

  constructor() { }

  ngOnInit(): void {
  }

  ExibirModalCadastro() {
		this.modalCadastroRef.show();
	}

  EsconderModalCadastro() {
		this.modalCadastroRef.hide();
	}

}
