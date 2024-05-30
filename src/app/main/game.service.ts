import { Injectable } from '@angular/core';

interface Game {
  title: string;
  description: string;
  releaseDate: string;
  image: string;
  rating: number;
  downloads: number;
  comingSoon: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private games: Game[] = [
     {
      title: 'Super Mario Bros',
      description: 'Un clásico juego de plataformas',
      releaseDate: '1985-09-13',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Super_Mario_Bros._Logo.svg/1280px-Super_Mario_Bros._Logo.svg.png',
      rating: 5.0,
      downloads: 945329,
      comingSoon: false
    },
    {
      title: 'The Legend of Zelda: Ocarina of Time',
      description: 'Un épico juego de aventuras',
      releaseDate: '1998-11-21',
      image: 'https://upload.wikimedia.org/wikipedia/en/5/57/The_Legend_of_Zelda_Ocarina_of_Time.jpg',
      rating: 5.0,
      downloads: 7999998,
      comingSoon: false
    },
    {
      title: 'Doom',
      description: 'Juego de disparos en primera persona',
      releaseDate: '1993-12-10',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiq8dTp5IEjfSxirO3xqnQCJ3kAIXBQ03ym4ux3J8o0Q&s',
      rating: 4.9,
      downloads: 998764,
      comingSoon: false
    },
    {
      title: 'Diablo II',
      description: 'Un juego de rol de acción',
      releaseDate: '2000-06-29',
      image: 'https://cdna.artstation.com/p/assets/images/images/037/506/816/large/marc-d-amico-diabloii-fanart.jpg?1620572518',
      rating: 3,
      downloads: 4000000,
      comingSoon: false
    },
    {
      title: 'Donkey Kong Country',
      description: 'Un juego de plataformas',
      releaseDate: '1994-11-21',
      image: 'https://upload.wikimedia.org/wikipedia/en/1/1a/Donkey_Kong_Country_SNES_cover.png',
      rating: 3,
      downloads: 3000000,
      comingSoon: false
    },
    {
      title: 'Warhammer 40,000: Space Marine 2',
      description: 'Un juego de disparos en tercera persona',
      releaseDate: '2024-07-26',
      image: 'https://store-images.s-microsoft.com/image/apps.64063.14012604327384469.6426cc9e-7132-4c39-87ca-d7762f687fe3.c15e9d3f-faf7-4586-abc1-c37836b32fc8?q=90&w=480&h=270',
      rating: 1.0,
      downloads: 0,
      comingSoon: true
    },
    {
      title: 'Tomb Raider',
      description: 'Un juego de acción-aventura',
      releaseDate: '1996-10-25',
      image: 'https://videojuerguistas.net/wp-content/uploads/2021/02/tombraider_portada.jpg',
      rating: 3,
      downloads: 7000000,
      comingSoon: false
    },
    {
      title: 'Age of Empires',
      description: 'Un juego de estrategia en tiempo real',
      releaseDate: '1997-10-15',
      image: 'https://e.snmc.io/lk/o/x/cabf9a15b1da0433c94dba1da5127602/9312053',
      rating: 4.8,
      downloads: 999878,
      comingSoon: false
    },
    {
      title: 'Senua\'s Saga: Hellblade II',
      description: 'Un juego de acción-aventura',
      releaseDate: '2024-08-26',
      image: 'https://sm.ign.com/ign_es/screenshot/default/portada_bv26.jpg',
      rating: 1.0,
      downloads: 0,
      comingSoon: true
    },
    {
      title: 'Pokémon Esmeralda',
      description: 'Un juego de rol de aventura',
      releaseDate: '2004-09-16',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Pokemon_Emerald.svg/1280px-Pokemon_Emerald.svg.png',
      rating: 4.8,
      downloads: 858932,
      comingSoon: false
    },
    {
      title: 'Counter Strike',
      description: 'Un juego de disparos en primera persona',
      releaseDate: '2000-11-01',
      image: 'https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2023/02/maxresdefault.jpg?fit=1500%2C844&quality=50&strip=all&ssl=1',
      rating: 3.0,
      downloads: 25000000,
      comingSoon: false
    },
  ];

  getPopularGames(): Game[] {
    return this.games.filter(game => game.rating > 4);
  }

  getMostDownloadedGames(): Game[] {
    return this.games.filter(game => game.downloads > 1000000);
  }

  getComingSoonGames(): Game[] {
    return this.games.filter(game => game.comingSoon);
  }

  addGame(game: Game) {
    this.games.push(game);
  }
}
