import { graphQLClient } from '../../lib';
import { GET_REFERENCES_QUERY } from '../../graphql/queries';

export const get = async () => {
	try {
		const { getReferences } = await graphQLClient.request(GET_REFERENCES_QUERY);
		return {
			status: 200,
			body: getReferences
		};
	} catch (error) {
		return {
			status: 500,
			body: { error: `Server Error: ${error}` }
		};
	}
};
