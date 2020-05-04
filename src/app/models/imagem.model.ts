import { Deserializable } from './serializable.model';

export class ImagemModel implements Deserializable {

  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;

  constructor(dados?: any) {
    this.deserialize(dados);
  }

  deserialize(dados?: any) {
    Object.assign(this, dados);
    return this;
  }

}
