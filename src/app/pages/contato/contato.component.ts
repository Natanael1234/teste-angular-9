import { Component, OnInit } from '@angular/core';
import { DrawerService } from 'src/app/services/drawer.service';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { emailInvalido } from 'src/app/validators/email.validator';
import { MyErrorStateMatcher } from 'src/app/validators/error-state-matcher';
import { mandatory } from 'src/app/validators/required.validator';
import { foneInvalido } from 'src/app/validators/fone.validator';
import { minLength, maxLength } from 'src/app/validators/text-len.validator';
import { mailMask } from 'src/app/masks/email.mask';
import { foneMask } from 'src/app/masks/fone.mask';

// ver https://github.com/uNmAnNeR/imaskjs


@Component({
  selector: 'nx-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

  formGroup = new FormGroup ({
    nome: new FormControl('', { validators: [minLength(10), maxLength(100), mandatory]}),
    email: new FormControl('', { validators: [emailInvalido, mandatory]}),
    fone: new FormControl('', {validators: [foneInvalido, mandatory]}),
    mensagem: new FormControl('', { validators: [minLength(10), maxLength(250), mandatory]})
  }, {
    updateOn: 'blur'
  });

  matcher = new MyErrorStateMatcher();

  foneMask = foneMask();
  emailMask = mailMask();

  constructor(public drawer: DrawerService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.formGroup.valid) {
      console.log('Enviando formulário');
    } else {
      console.log('Formulário inválido');
    }
  }


}
