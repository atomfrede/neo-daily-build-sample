export interface IArtist {
  id?: string;
  name?: string;
}

export class Artist implements IArtist {
  constructor(public id?: string, public name?: string) {}
}
