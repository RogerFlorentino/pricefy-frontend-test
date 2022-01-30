import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromocoesRoutingModule } from './promocoes-routing.module';
import { PromocoesComponent } from './promocoes.component';
import { TabelaPromocoesComponent } from './tabela-promocoes/tabela-promocoes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { CadastroComponent } from './cadastro/cadastro.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PromocoesComponent,
    TabelaPromocoesComponent,
    CadastroComponent
  ],
  imports: [
    CommonModule,
    PromocoesRoutingModule,
    FormsModule,
		ReactiveFormsModule,
		NgSelectModule,
    SharedModule
  ]
})
export class PromocoesModule { }
