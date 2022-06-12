import { graphQLClient } from '../../lib';
import { SHOW_REFERENCE_QUERY } from '../../graphql/queries';

/** @type {import('./__types/[UUID]').RequestHandler} */
export async function get({ params }) {
	const { UUID } = params;
	try {
		const { showReference } = await graphQLClient.request(SHOW_REFERENCE_QUERY, { UUID });
		return {
			body: { reference: showReference }
		};
	} catch (error) {
		return {
			status: 404
		};
	}
}
