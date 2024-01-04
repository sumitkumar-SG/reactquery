import React from 'react'
import { useQueries } from 'react-query';
import axios from 'axios';

const fetchSuperHero =  (heroId) => {
    return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

const DynamicParallelQuery = ({heroIds}) => {
    const queryResult = useQueries(
        heroIds.map((heroId) => {
            return {
                queryKey: ['super-hero',heroId],
                queryFn: () => fetchSuperHero(heroId),
                variables: {heroId}
            }
        })
    )
    console.log({queryResult});
    return <div>DynamicParallelQuery</div>
}

export default DynamicParallelQuery