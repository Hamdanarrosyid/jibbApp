import {gql} from '@apollo/client';

export const ARTICLES_QUERY = gql`
  query {
    articles(orderBy: createdAt_DESC) {
      id
      title
      image
      createdBy {
        id
        firstName
      }
      createdAt
    }
  }
`;
