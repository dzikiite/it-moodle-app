import { ApolloClient, InMemoryCache } from '@apollo/client';

export const clientApollo = new ApolloClient({
    uri: 'https://graphql.datocms.com/',
    headers: {
        "Authorization": `Bearer ${process.env.REACT_APP_DATOCMS_API_KEY}`,
    },
    cache: new InMemoryCache(),
});