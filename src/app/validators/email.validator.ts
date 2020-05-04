import { AbstractControl, ValidationErrors } from '@angular/forms';


export function emailInvalido (control: AbstractControl) : ValidationErrors | null {
  if (!control.value) return null;
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(!re.test(String(control.value ?? '').toLowerCase())) {
    return {
      msg: 'E-mail inválido',
      emailInvalido: true
    }
  }
  return null;

}



