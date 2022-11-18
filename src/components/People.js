import React, { useState } from 'react'
import { useQuery } from 'react-query';
import Person from './Person';

const fetchPeople = async (pageNumber) => {
    const res = await fetch(`https://swapi.dev/api/people/?page=${pageNumber}`)
    return res.json();
}

export default function People() {
    const [pageNumber, setPageNumber] = useState(1)
    const {data, status} = useQuery(['people', pageNumber], () => fetchPeople(pageNumber))
    console.log(data)
    return (
    <div>
        <h2>People</h2>
        {status === 'error' && (
            <div>Error fatching data</div>
        )}
        {status === 'loading' && (
            <div>Loading data...</div>
        )}
        {status === 'success' && (
            <div>
                {data.results.map(person => <Person key={person.name} person={person} />)}
            </div>
        )}
        <div>
            <button onClick={()=> setPageNumber(page => page-1 )} disabled={pageNumber === 1}>Previous</button>
            <button onClick={()=> setPageNumber(page => page+1 )} disabled={pageNumber === 6}>Next</button>
        </div>
    </div>
  )
}
