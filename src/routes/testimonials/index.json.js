import { graphQLClient } from '../../lib';
import { GET_COMMENTS_QUERY } from '../../graphql/queries';

export const get = async () => {
	try {
		const { getComments } = await graphQLClient.request(GET_COMMENTS_QUERY);
		return {
			status: 200,
			body: getComments
		};
	} catch (error) {
		return {
			status: 500,
			body: { error: `Server Error: ${error}` }
		};
	}
};
