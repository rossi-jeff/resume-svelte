import { graphQLUrl } from './graphql-url';
import { GraphQLClient } from 'graphql-request';

export const graphQLClient = new GraphQLClient(graphQLUrl, {
	mode: 'cors'
});
