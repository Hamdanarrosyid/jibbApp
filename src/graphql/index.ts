import {ApolloClient, InMemoryCache} from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://dev-jibb1605949666379.microgen.mejik.id/graphql',
  cache: new InMemoryCache(),
});
