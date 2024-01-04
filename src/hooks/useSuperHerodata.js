import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios';

const fetchSuperHerodata = ({queryKey}) => {
    const heroId = queryKey[1];
    return axios.get(`http://localhost:4000/superheroes/${heroId}`);
}

export const useSuperHerodata = (heroId) => {
  return useQuery(['super-hero',heroId], fetchSuperHerodata);
}