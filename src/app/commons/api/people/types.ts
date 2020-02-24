export interface Human {
  'name': string;
  'height': number;
  'mass': number;
  'hair_color': string;
  'skin_color': string;
  'eye_color': string;
  'birth_year': string;
  'gender': string;
  'homeworld': string;
  'films': Array<string>;
  'species': Array<string>;
  'vehicles': Array<string>;
  'starships': Array<string>;
  'created': Date;
  'edited': Date;
  'url': string;
}


export interface People {
  'count': number;
  'next': string;
  'previous': string;
  'results': Array<Human>;
}

export interface Planet {
  'name': string;
  'rotation_period': number;
  'orbital_period': number;
  'diameter': number;
  'climate': string;
  'gravity': string;
  'terrain': string;
  'surface_water': number;
  'population': number;
  /*array with urls*/
  'residents': Array<string>;
  /*array with urls*/
  'films': Array<string>;
  'created': Date;
  'edited': Date;
  'url': string;
}
