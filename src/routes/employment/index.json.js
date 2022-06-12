import { graphQLClient } from '../../lib';
import { GET_JOBS_QUERY } from '../../graphql/queries';

export const get = async () => {
	try {
		const { getJobs } = await graphQLClient.request(GET_JOBS_QUERY);
		return {
			status: 200,
			body: getJobs
		};
	} catch (error) {
		return {
			status: 500,
			body: { error: `Server Error: ${error}` }
		};
	}
};
