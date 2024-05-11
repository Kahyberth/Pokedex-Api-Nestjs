import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios'
import { PokeResponse } from './interfaces/poke-response.interface';
import { PokemonService } from 'src/pokemon/pokemon.service';

@Injectable()
export class SeedService {
  
  private readonly axios: AxiosInstance = axios;

  constructor(private pokemonService: PokemonService) {}

  async executeSeed() {
    const { data } = await axios.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=10')

   data.results.forEach(async({name, url}) => {
    const fragments = url.split("/");
    const no = +fragments[fragments.length - 2];
    await this.pokemonService.create({name, no})
   })

    return 'Seed Executed';
  }

}
