export interface Character {
  id: string;
  name: string;
  height: number;
  mass: number;
  hair_color: string;
  eye_color: string;
  skin_color: string;
  birth_year: string;
  gender: string;
  force: number;
  avatar: string;
  img: string;
  homeworld?: string;
  films?: string[];
  species?: string[];
  vehicles?: string[];
  starships?: string[];
  created?: string;
  edited?: string;
  url?: string;
}

export const SW_CHARS: Array<Character> = [
  {
    'id': 'luke-skywalker',
    'name': 'Luke Skywalker',
    'height': 172,
    'mass': 77,
    'hair_color': 'blond',
    'skin_color': 'fair',
    'eye_color': 'blue',
    'birth_year': '19BBY',
    'gender': 'male',
    'force': 5,
    'avatar': 'https://s3-us-west-2.amazonaws.com/star-wars-characters/luke-skywalker-sm.jpeg',
    'img': 'https://s3-us-west-2.amazonaws.com/star-wars-characters/luke-skywalker-lg.jpeg'
  },
  {
    'id': 'c-3po',
    'name': 'C-3PO',
    'height': 167,
    'mass': 75,
    'hair_color': 'n/a',
    'skin_color': 'gold',
    'eye_color': 'yellow',
    'birth_year': '112BBY',
    'gender': 'n/a',
    'force': 0.5,
    'avatar': 'https://s3-us-west-2.amazonaws.com/star-wars-characters/c-3po-lg.jpeg',
    'img': 'https://s3-us-west-2.amazonaws.com/star-wars-characters/c-3po-sm.jpeg'
  },
  {
    'id': 'r2-d2',
    'name': 'R2-D2',
    'height': 96,
    'mass': 32,
    'hair_color': 'n/a',
    'skin_color': 'white, blue',
    'eye_color': 'red',
    'birth_year': '33BBY',
    'gender': 'n/a',
    'force': 0.5,
    'avatar': 'https://s3-us-west-2.amazonaws.com/star-wars-characters/r2-d2-sm.jpeg',
    'img': 'https://s3-us-west-2.amazonaws.com/star-wars-characters/r2-d2-lg.jpeg'
  },
  {
    'id': 'darth-vader',
    'name': 'Darth Vader',
    'height': 202,
    'mass': 136,
    'hair_color': 'none',
    'skin_color': 'white',
    'eye_color': 'yellow',
    'birth_year': '41.9BBY',
    'gender': 'male',
    'force': 5,
    'avatar': 'https://s3-us-west-2.amazonaws.com/star-wars-characters/darth-vader-sm.jpeg',
    'img': 'https://s3-us-west-2.amazonaws.com/star-wars-characters/darth-vader-lg.jpeg'
  },
  {
    'id': 'princess-leia',
    'name': 'Leia Organa',
    'height': 150,
    'mass': 49,
    'hair_color': 'brown',
    'skin_color': 'light',
    'eye_color': 'brown',
    'birth_year': '19BBY',
    'gender': 'female',
    'force': 5,
    'avatar': 'https://s3-us-west-2.amazonaws.com/star-wars-characters/princess-leia-sm.jpeg',
    'img': 'https://s3-us-west-2.amazonaws.com/star-wars-characters/princess-leia-lg.jpeg'
  },
  {
    'id': 'anakin-skywalker',
    'name': 'Anakin Skywalker',
    'height': 188,
    'mass': 84,
    'hair_color': 'blond',
    'skin_color': 'fair',
    'eye_color': 'blue',
    'birth_year': '41.9BBY',
    'gender': 'male',
    'force': 5,
    'avatar': 'https://s3-us-west-2.amazonaws.com/star-wars-characters/anakin-skywalker-sm.jpeg',
    'img': 'https://s3-us-west-2.amazonaws.com/star-wars-characters/anakin-skywalker-lg.jpeg'
  },
  {
    'id': 'chewie',
    'name': 'Chewbacca',
    'height': 228,
    'mass': 112,
    'hair_color': 'brown',
    'skin_color': 'unknown',
    'eye_color': 'blue',
    'birth_year': '200BBY',
    'gender': 'male',
    'force': 0.5,
    'avatar': 'https://s3-us-west-2.amazonaws.com/star-wars-characters/chewie-sm.jpeg',
    'img': 'https://s3-us-west-2.amazonaws.com/star-wars-characters/chewie-lg.jpeg'
  },
  {
    'id': 'han-solo',
    'name': 'Han Solo',
    'height': 180,
    'mass': 80,
    'hair_color': 'brown',
    'skin_color': 'fair',
    'eye_color': 'brown',
    'birth_year': '29BBY',
    'gender': 'male',
    'force': 0.5,
    'avatar': 'https://s3-us-west-2.amazonaws.com/star-wars-characters/han-solo-sm.jpeg',
    'img': 'https://s3-us-west-2.amazonaws.com/star-wars-characters/han-solo-lg.jpeg'
  },
  {
    'id': 'jabba-the-hutt',
    'name': 'Jabba Desilijic Tiure',
    'height': 175,
    'mass': 1358,
    'hair_color': 'n/a',
    'skin_color': 'green-tan, brown',
    'eye_color': 'orange',
    'birth_year': '600BBY',
    'gender': 'hermaphrodite',
    'force': 0.5,
    'avatar': 'https://s3-us-west-2.amazonaws.com/star-wars-characters/jabba-the-hutt-sm.jpeg',
    'img': 'https://s3-us-west-2.amazonaws.com/star-wars-characters/jabba-the-hutt-lg.jpeg'
  },
  {
    'id': 'jyn-erso',
    'name': 'Jyn Erso',
    'height': 170,
    'mass': 77,
    'hair_color': 'brown',
    'skin_color': 'fair',
    'eye_color': 'green',
    'birth_year': '22BBY',
    'gender': 'female',
    'force': 0.5,
    'avatar': 'https://s3-us-west-2.amazonaws.com/star-wars-characters/jyn-erso-sm.jpeg',
    'img': 'https://s3-us-west-2.amazonaws.com/star-wars-characters/jyn-erso-lg.jpeg'
  },
  {
    'id': 'kylo-ren',
    'name': 'Kylo Ren',
    'height': 180,
    'mass': 110,
    'hair_color': 'black',
    'skin_color': 'fair',
    'eye_color': 'hazel',
    'birth_year': '5ABY',
    'gender': 'male',
    'force': 4,
    'avatar': 'https://s3-us-west-2.amazonaws.com/star-wars-characters/kylo-ren-sm.jpeg',
    'img': 'https://s3-us-west-2.amazonaws.com/star-wars-characters/kylo-ren-lg.jpeg'
  },
  {
    'id': 'yoda',
    'name': 'Yoda',
    'height': 66,
    'mass': 17,
    'hair_color': 'white',
    'skin_color': 'green',
    'eye_color': 'brown',
    'birth_year': '896BBY',
    'gender': 'male',
    'force': 5,
    'avatar': 'https://s3-us-west-2.amazonaws.com/star-wars-characters/yoda-sm.jpeg',
    'img': 'https://s3-us-west-2.amazonaws.com/star-wars-characters/yoda-lg.jpeg'
  },
  {
    'id': 'cassian-andor',
    'name': 'Cassian Andor',
    'height': 206,
    'mass': 80,
    'hair_color': 'brown',
    'skin_color': 'light brown',
    'eye_color': 'brown',
    'birth_year': '26BBY',
    'gender': 'male',
    'force': 0.5,
    'avatar': 'https://s3-us-west-2.amazonaws.com/star-wars-characters/cassian-andor-sm.jpeg',
    'img': 'https://s3-us-west-2.amazonaws.com/star-wars-characters/cassian-andor-lg.jpeg'
  },
  {
    'id': 'finn',
    'name': 'Finn',
    'height': -1,
    'mass': -1,
    'hair_color': 'black',
    'skin_color': 'dark',
    'eye_color': 'dark',
    'birth_year': 'unknown',
    'gender': 'male',
    'force': 2.5,
    'avatar': 'https://s3-us-west-2.amazonaws.com/star-wars-characters/finn-sm.jpeg',
    'img': 'https://s3-us-west-2.amazonaws.com/star-wars-characters/finn-lg.jpeg'
  },
  {
    'id': 'rey',
    'name': 'Rey',
    'height': -1,
    'mass': -1,
    'hair_color': 'brown',
    'skin_color': 'light',
    'eye_color': 'hazel',
    'birth_year': 'unknown',
    'gender': 'female',
    'force': 5,
    'avatar': 'https://s3-us-west-2.amazonaws.com/star-wars-characters/rey-sm.jpeg',
    'img': 'https://s3-us-west-2.amazonaws.com/star-wars-characters/rey-lg.jpeg'
  },
  {
    'id': 'poe-dameron',
    'name': 'Poe Dameron',
    'height': -1,
    'mass': -1,
    'hair_color': 'brown',
    'skin_color': 'light',
    'eye_color': 'brown',
    'birth_year': 'unknown',
    'gender': 'male',
    'force': 0.5,
    'avatar': 'https://s3-us-west-2.amazonaws.com/star-wars-characters/poe-dameron-sm.jpeg',
    'img': 'https://s3-us-west-2.amazonaws.com/star-wars-characters/poe-dameron-lg.jpeg'
  },
  {
    'id': 'bb-8',
    'name': 'BB8',
    'height': -1,
    'mass': -1,
    'hair_color': 'none',
    'skin_color': 'none',
    'eye_color': 'black',
    'birth_year': 'unknown',
    'gender': 'none',
    'force': 0.5,
    'avatar': 'https://s3-us-west-2.amazonaws.com/star-wars-characters/bb-8-sm.jpeg',
    'img': 'https://s3-us-west-2.amazonaws.com/star-wars-characters/bb-8-lg.jpeg'
  },
  {
    'id': 'padme-amidala',
    'name': 'Padmé Amidala',
    'height': 165,
    'mass': 45,
    'hair_color': 'brown',
    'skin_color': 'light',
    'eye_color': 'brown',
    'birth_year': '46BBY',
    'gender': 'female',
    'force': 0.5,
    'avatar': 'https://s3-us-west-2.amazonaws.com/star-wars-characters/padme-amidala-sm.jpeg',
    'img': 'https://s3-us-west-2.amazonaws.com/star-wars-characters/padme-amidala-lg.jpeg'
  }
];