import { graphQLClient } from '../../lib';
import { GET_LINKS_QUERY } from '../../graphql/queries';

export const get = async () => {
	try {
		const { getLinks } = await graphQLClient.request(GET_LINKS_QUERY);
		return {
			status: 200,
			body: getLinks
		};
	} catch (error) {
		return {
			status: 500,
			body: { error: `Server Error: ${error}` }
		};
	}
};
