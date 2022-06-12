import { graphQLClient } from '../../lib';
import { GET_SCHOOLS_QUERY } from '../../graphql/queries';

export const get = async () => {
	try {
		const { getSchools } = await graphQLClient.request(GET_SCHOOLS_QUERY);
		return {
			status: 200,
			body: getSchools
		};
	} catch (error) {
		return {
			status: 500,
			body: { error: `Server Error: ${error}` }
		};
	}
};
