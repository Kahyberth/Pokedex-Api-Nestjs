import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios'
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  
  private readonly axios: AxiosInstance = axios;

  async executeSeed() {
    const { data } = await axios.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=4')

   data.results.forEach(({name, url}) => {
    const fragments = url.split("/");
    const no = +fragments[fragments.length - 2];
   })

    return data.results;
  }

}
