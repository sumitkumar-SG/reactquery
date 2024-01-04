import { useSuperHeroes } from "../hooks/useSuperHeroes";

const RQSuperHeroesFetch = () => {
  try {
    const onSuccess = (data) => {
      console.log("Data fetching Success", data);
    };

    const onError = (error) => {
      console.log("Data Fetching Error", error);
    };

    const {
      isLoading,
      data,
      isError,
      error,
      isFetching,
      refetch,
    // eslint-disable-next-line react-hooks/rules-of-hooks
    } = useSuperHeroes(onSuccess, onError, {
      enabled: false,
    });

    if (isLoading || isFetching) {
      return <h2>Loading...</h2>;
    }

    if (isError) {
      return <h2>{error.message}</h2>;
    }

    console.log("Loading...", data.data);

    // Check if data is an array before using map
    if (!Array.isArray(data.data)) {
      throw new Error("Data is not an array");
    }

    return (
      <>
        <h2>Fetch Heroes</h2>
        <button onClick={refetch}>Refetch</button>
        {data?.data.map((heroName) => (
          <div key={heroName.id}>{heroName.name}</div>
        ))}
      </>
    );
  } catch (error) {
    // Handle any unexpected errors here
    console.error("Unexpected error:", error);
    return <h2>Error occurred</h2>;
  }
};

export default RQSuperHeroesFetch;
