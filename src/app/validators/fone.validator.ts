import { AbstractControl, ValidationErrors } from '@angular/forms';


export function foneInvalido (control: AbstractControl) : ValidationErrors | null {
  var re = /^\(\d{2}\)\s(\d{4}|\d{5})-\d{4}$/;
  if(!re.test(String(control.value ?? '').toLowerCase())) {
    return {
      msg: 'Fone inválido',
      foneInvalido: true
    }
  }
  return null;
}



