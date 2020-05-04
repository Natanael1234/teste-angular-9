import { AbstractControl, ValidationErrors } from '@angular/forms';

export function minLength (length:number) {
  return (control: AbstractControl) : ValidationErrors | null => {
    if(control.value?.length < length) {
      return {
        msg: `Mínimo ${length} caracteres`,
        minLength: true
      }
    }
    return null;
  }
}

export function maxLength (length:number) {
  return (control: AbstractControl) : ValidationErrors | null => {
    if(control.value?.length > length) {
      return {
        msg: `Máximo ${length} caracteres`,
        minLength: true
      }
    }
    return null;
  }
}


export function length (minLength:number, maxLength:number) {
  return (control: AbstractControl) : ValidationErrors | null => {
    if(control.value?.length < minLength || control.value?.length > maxLength) {
      return {
        msg: `Deve conter entre ${minLength} e ${maxLength} caracteres`,
        minLength: true
      }
    }
    return null;
  }
}

