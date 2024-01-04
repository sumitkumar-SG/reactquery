import { useParams } from "react-router-dom"
import { useSuperHerodata } from "../hooks/useSuperHerodata"


export const RQSuperHero = () => {
    const { heroId } = useParams()
    const { isLoading,data, isError, error } = useSuperHerodata(heroId);
    if(isLoading){
        return <h2>Loading...</h2>
    }
    if(isError){
        return <h2>{error.message}</h2>
    }
    return (
        <div>
            <h2>{data?.data.name} - {data?.data.alterego}</h2>
        </div>
    )
}