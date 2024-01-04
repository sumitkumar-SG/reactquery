import { useQuery } from'react-query';
import axios from 'axios';

const fetchHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const useSuperHeroes = (onSuccess, onError) => {
    return useQuery(
        "super-heroes",
        fetchHeroes,
        {  
          onSuccess,
          onError,
        //   select : (data) =>{
        //     const superHeroes = data.data.map((hero) =>hero.name);
        //     return superHeroes;
        //   }
        }
    )
}