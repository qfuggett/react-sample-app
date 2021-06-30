import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { LOAD_API } from '../GraphQL/Queries';

function GetApi() {

    const {error, loading, data} = useQuery(LOAD_API)
    const [products, setProducts] = useState([]);


    useEffect(() => {

        console.log(data);
    }, [data])


    return (
        <div>
            test getapi
        </div>
    )
}

export default GetApi;