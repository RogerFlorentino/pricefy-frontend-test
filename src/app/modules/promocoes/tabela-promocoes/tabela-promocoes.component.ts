import { Component, OnInit } from '@angular/core';
import { Promocao } from './../../../models/promocao';

@Component({
  selector: 'app-tabela-promocoes',
  templateUrl: './tabela-promocoes.component.html',
  styleUrls: ['./tabela-promocoes.component.sass']
})
export class TabelaPromocoesComponent implements OnInit {

  public promocoes: Promocao.Promocao[] = [
    {
      id: 1,
      categoria: {
        id: 1,
        descricao: 'Bebidas'
      },
      gtin: '12345678912345',
      precoRegular: 14.51,
      precoPromocional: 13.95,
      descricao: 'Super promoção de bebidas',
      dataInicial: new Date(),
      dataFinal: new Date()
    },
    {
      id: 2,
      categoria: {
        id: 1,
        descricao: 'Bebidas'
      },
      gtin: '12345678912345',
      precoRegular: 14.51,
      precoPromocional: 13.95,
      descricao: 'Super promoção de bebidas 2',
      dataInicial: new Date(),
      dataFinal: new Date()
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
