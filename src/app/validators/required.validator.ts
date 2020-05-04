import { AbstractControl, ValidationErrors } from '@angular/forms';


export function mandatory (control: AbstractControl) : ValidationErrors | null {
  if(!control.value) {
    return {
      msg: 'Campo obrigatório',
      invalidEmail: true
    }
  }
  return null;

}



