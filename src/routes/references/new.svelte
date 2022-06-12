<script>
	import { FormName, FormAddress, FormCompany, FormCredentials } from '../../components/forms';
	import { graphQLClient, breadcrumbs } from '../../lib';
	import { CREATE_REFERENCE_MUTATION } from '../../graphql/mutations';
	let reference = {
		Name: {
			Salutation: '',
			First: '',
			Middle: '',
			Last: '',
			Suffix: ''
		},
		Address: {
			Address: '',
			Suite: '',
			City: '',
			State: '',
			Zip: ''
		},
		Credentials: {
			Username: '',
			Password: ''
		},
		Title: '',
		Company: ''
	};

	/** @type {{ text: string; href?: string; }[]} */
	let trail = [
		{ text: 'Home', href: '/' },
		{ text: 'References', href: '/references' },
		{ text: 'New Reference' }
	];
	breadcrumbs.set(trail);

	const savereference = async () => {
		const data = await graphQLClient.request(CREATE_REFERENCE_MUTATION, reference);
		console.log(data);
	};
</script>

<div class="card-normal shadow">
	<div class="card-body">
		<div class="collapse collapse-arrow border">
			<input type="checkbox" />
			<div class="collapse-title">Name</div>
			<div class="collapse-content">
				<FormName name={reference.Name} />
			</div>
		</div>

		<div class="collapse collapse-arrow border">
			<input type="checkbox" />
			<div class="collapse-title">Company</div>
			<div class="collapse-content">
				<FormCompany {reference} />
			</div>
		</div>

		<div class="collapse collapse-arrow border">
			<input type="checkbox" />
			<div class="collapse-title">Address</div>
			<div class="collapse-content">
				<FormAddress address={reference.Address} />
			</div>
		</div>

		<div class="collapse collapse-arrow border">
			<input type="checkbox" />
			<div class="collapse-title">Credentials</div>
			<div class="collapse-content">
				<FormCredentials credentials={reference.Credentials} />
			</div>
		</div>

		<button class="btn w-60" on:click={savereference}>Save Reference</button>
	</div>
</div>
