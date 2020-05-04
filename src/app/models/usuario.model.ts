import { Deserializable } from './serializable.model';

export class UsuarioModel implements Deserializable {

  id:number;
  name:string;
  userName:string;
  phone:string;
  email:string;
  website:string;
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    }
  }
  company: {
    name:string;
    bs:string;
    catchPhrase:string
  }
  constructor (dados?:any) {
    this.deserialize(dados);
  }

  deserialize (dados?:any) {
    Object.assign(this, dados);
    return this;
  }

}
