export interface Teams {
  name: string;
  code: string;
  flag: string;
  alignment: {
    [key: number]: string
  };
}

export const TEAMS: Teams[] = [
  {
    name: 'Argentina',
    code: 'ARG',
    flag: 'arge',
    alignment: {
      1: 'Martinez',
      2: 'Romero',
      3: 'Otamendi',
      4: 'Tagliafico',
      5: 'Molina',
      6: 'Paredes',
      7: 'Di María',
      8: 'Mac Allister',
      9: 'Alvarez',
      10: 'Messi',
      11: 'Martinez',
      12: 'Aguero',
      13: 'Dybala',
      14: 'Lo Celso',
      15: 'Acuña',
      16: 'Foyth',
      17: 'Palacios',
      18: 'Gonzalez',
      19: 'Martinez Quarta',
      20: 'Montiel',
      21: 'Salvio',
      22: 'Pezzella',
      23: 'Correa',
      24: 'Dominguez',
      25: 'Lautaro'
    }
  },
  {
    name: 'Brazil',
    code: 'BRA',
    flag: 'bras',
    alignment: {
      1: 'Alisson',
      2: 'Danilo',
      3: 'Marquinhos',
      4: 'Thiago Silva',
      5: 'Alex Sandro',
      6: 'Casemiro',
      7: 'Lucas Paquetá',
      8: 'Arthur',
      9: 'Richarlison',
      10: 'Neymar',
      11: 'Gabriel Jesus',
      12: 'Weverton',
      13: 'Emerson',
      14: 'Felipe',
      15: 'Fred',
      16: 'Raphinha',
      17: 'Lucas Verissimo',
      18: 'Gabigol',
      19: 'Vinicius Jr.',
      20: 'Gerson',
      21: 'Malcom',
      22: 'Eder Militao',
      23: 'Rodrygo',
      24: 'Renan Lodi',
      25: 'Paulinho'
    }
  },
  {
    name: 'Uruguay',
    code: 'URU',
    flag: 'urugu',
    alignment: {
      1: 'Muslera',
      2: 'Giménez',
      3: 'Godín',
      4: 'Viña',
      5: 'Cáceres',
      6: 'Vecino',
      7: 'Valverde',
      8: 'De La Cruz',
      9: 'Suárez',
      10: 'Cavani',
      11: 'Arrascaeta',
      12: 'Torreira',
      13: 'Nandez',
      14: 'Torres',
      15: 'Gomez',
      16: 'Coates',
      17: 'Lodeiro',
      18: 'Silva',
      19: 'Campana',
      20: 'Stuani',
      21: 'Varela',
      22: 'Caceres',
      23: 'Lempez',
      24: 'Saracchi',
      25: 'Jimenez'
    }
  },
  {
    name: 'Chile',
    code: 'CHI',
    flag: 'chil',
    alignment: {
      1: 'Bravo',
      2: 'Isla',
      3: 'Medel',
      4: 'Sierralta',
      5: 'Mena',
      6: 'Aránguiz',
      7: 'Vidal',
      8: 'Díaz',
      9: 'Meneses',
      10: 'Vargas',
      11: 'Sánchez',
      12: 'Fernandes',
      13: 'Pulgar',
      14: 'Diaz',
      15: 'Fuenzalida',
      16: 'Roco',
      17: 'Valdes',
      18: 'Henriquez',
      19: 'Araos',
      20: 'Galvez',
      21: 'Maripan',
      22: 'Millar',
      23: 'Pinares',
      24: 'Pina',
      25: 'Valencia'
    }
  }
];
