import React, {useState} from 'react'
import { useQuery } from 'react-query';
import Planet from './Planet';

const fetchPlanets = async (pageNumber) => {
    const res = await fetch(`https://swapi.dev/api/planets/?page=${pageNumber}`)
    return res.json();
}

export default function Planets() {
    const [pageNumber, setPageNumber] = useState(1)
    const {data, status} = useQuery(['planets', pageNumber], () => fetchPlanets(pageNumber))

    return (
    <div>
        <h2>Planets</h2>
        {status === 'error' && (
            <div>Error fatching data</div>
        )}
        {status === 'loading' && (
            <div>Loading data...</div>
        )}
        {status === 'success' && (
            <div>
                {data.results.map(planet => <Planet key={planet.name} planet={planet} />)}
            </div>
        )}
        <div>
            <button onClick={()=> setPageNumber(page => page-1 )} disabled={pageNumber === 1}>Previous</button>
            <button onClick={()=> setPageNumber(page => page+1 )} disabled={pageNumber === 6}>Next</button>
        </div>
    </div>
  )
}
