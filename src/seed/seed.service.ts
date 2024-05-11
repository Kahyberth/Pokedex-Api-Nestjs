import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';
import { PokemonService } from 'src/pokemon/pokemon.service';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {



  constructor(private pokemonService: PokemonService, private readonly http: AxiosAdapter) { }

  async executeSeed() {

    const data = await this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=750')
    const insertPromisesArray = []

    data.results.forEach(async ({ name, url }) => {
      const fragments = url.split("/");
      const no = +fragments[fragments.length - 2];
      insertPromisesArray.push(this.pokemonService.create({ name, no }));
    })

    await Promise.all(insertPromisesArray);

    return 'Seed Executed';
  }

}
