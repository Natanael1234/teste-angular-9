import { Deserializable } from './serializable.model';

export class AlbumModel implements Deserializable {

  id:number;
  title:string;
  userId:number;

  constructor(dados?:any) {
    this.deserialize(dados);
  }

  deserialize(dados?: any) {
    Object.assign(this, dados);
    return this;
  }

}
