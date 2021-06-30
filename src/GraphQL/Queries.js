import { gql } from '@apollo/client';

export const LOAD_API = gql`
    query {
        getAllProducts {
            name
            description
        }
    }
  
`;