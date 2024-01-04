import { useQuery } from "react-query";
import axios from 'axios';
import { Link } from "react-router-dom";

const RQSuperHeroes = () => {

  const onSuccess = (data) =>{
    console.log("Data fetching Success", data);
  }

  const onError = (error) =>{
    console.log("Data Fetching Error", error);
  }

  const fetchHeroes = async () => {
    try {
      const response = await axios.get("http://localhost:4000/superheroes");
      return response.data;
    } catch (error) {
      throw error;
      console.log("Data Fetching Error", error.message);
    }
  };

  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    "super-heroes",
    fetchHeroes,
    {  
      onSuccess,
      onError,
      // select: (data) => {
      //   const superHeroes = data.map((hero) => hero.name);
      //   return superHeroes;
      // },
      enabled: false
    }
  );
  
  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQSuperHeroes</h2>
      <button onClick={refetch}>Refetch</button>
      {data?.map((hero) => (
        <div key={hero.id}>
          <Link to={`/rq-super-hero/${hero.id}`}>{hero.name}</Link>
        </div>
      ))}
    </>
  );
};

export default RQSuperHeroes;
