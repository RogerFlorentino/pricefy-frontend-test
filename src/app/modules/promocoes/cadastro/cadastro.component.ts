import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgOption } from '@ng-select/ng-select';
import { RootStoreFacade } from 'src/app/facade/root-store.facade';
import { FormHelperService } from 'src/app/services/form-helper.service';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-cadastro',
	templateUrl: './cadastro.component.html',
	styleUrls: ['./cadastro.component.sass']
})
export class CadastroComponent implements OnInit {

	form!: FormGroup;
	categorias: NgOption[] = [
		{
			label: 'Eletrônicos',
			value: 1
		},
		{
			label: 'Bebidas',
			value: 2
		}
	];

	@Output() onSave: EventEmitter<any> = new EventEmitter();
	@Output() onCancel: EventEmitter<any> = new EventEmitter();

	constructor(public fb: FormBuilder,
		public formHelper: FormHelperService,
		private storeFacade: RootStoreFacade,
		public calendar: NgbCalendar) { }

	ngOnInit(): void {
		this.form = this.CreateForm();
	}

	CreateForm() {
		return this.fb.group({
			id: [''],
			gtin: ['', Validators.required, Validators.minLength(14), Validators.maxLength(14)],
			descricao: ['', Validators.required, Validators.maxLength(100)],
			categoria: [null, Validators.required],
			precoRegular: ['', Validators.required],
			precoPromocional: ['', Validators.required],
			dataInicio: [this.calendar.getToday(), Validators.required],
			dataFim: [this.calendar.getToday(), Validators.required]
		});
	}

	public ValidarForm(): boolean {
		return this.formHelper.ValidateAllFormFields(this.form);
	}

	public Salvar() {
		if (!this.ValidarForm()) {
			return;
		}

		this.onSave.emit();


	}

	public Cancelar() {
		this.onCancel.emit();
	}

}
