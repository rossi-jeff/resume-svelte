import { gql } from 'graphql-request';

export const CREATE_REFERENCE_MUTATION = gql`
	mutation CreateReferenceMutation(
		$Name: NameInput
		$Address: AddressInput
		$Title: String
		$Company: String
		$Credentials: CredentialsInput
	) {
		createReference(
			Name: $Name
			Address: $Address
			Title: $Title
			Company: $Company
			Credentials: $Credentials
		) {
			Id
			Name {
				Salutation
				First
				Middle
				Last
				Suffix
			}
			Address {
				Address
				Suite
				City
				State
				Zip
			}
			Title
			Company
			UUID
			Created
			Updated
			Version
		}
	}
`;
