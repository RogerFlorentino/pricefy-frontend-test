import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormHelperService {

  public readonly MaskData = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];

  constructor() { }

  public CheckValidation(form: FormGroup, controlName: string, validationName?: string) {

		if (validationName) {
			return this.CheckValidationByName(form, controlName, validationName);
		}

		const valid = form.controls[controlName].invalid &&
			(form.controls[controlName].touched ||
				form.controls[controlName].dirty);
		return valid;
	}

	public CheckValidationByName(form: FormGroup, controlName: string, validationName: string) {
		return (form.controls[controlName].getError(validationName) &&
			(form.controls[controlName].touched &&
				form.controls[controlName].dirty));
	}

	public ValidateAllFormFields(formGroup: FormGroup) {
		Object.keys(formGroup.controls).forEach(field => {
			const control = formGroup.get(field);
			if (control instanceof FormControl) {
				control.markAsTouched({ onlySelf: true });
			} else if (control instanceof FormGroup) {
				this.ValidateAllFormFields(control);
			}
		});

		return formGroup.valid;
	}

	public DisableFormFields(formGroup: FormGroup, disable: boolean) {
		Object.keys(formGroup.controls).forEach(field => {
			const control = formGroup.get(field)!;
			if (control instanceof FormControl) {

				if (disable) {
					control.disable();
				} else {
					control.enable();
				}

			} else if (control instanceof FormGroup) {
				this.DisableFormFields(control, disable);
			}
		});
	}

	public ValidateForm(formGroup: FormGroup): boolean {
		this.ValidateAllFormFields(formGroup);
		return formGroup.valid;
	}
}
