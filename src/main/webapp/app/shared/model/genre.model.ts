export interface IGenre {
  id?: string;
  name?: string;
}

export class Genre implements IGenre {
  constructor(public id?: string, public name?: string) {}
}
