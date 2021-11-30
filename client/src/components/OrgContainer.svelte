<script>
	import OrgCard from './OrgCard.svelte'

  let orgs = [
		{
			org_logo: 'images/RW-Logo-Icon-Profile.svg',
			org_label: 'Test org__name1',
			org_type: 'existing',
		},
		{
			org_logo: 'images/RW-Logo-Icon-Profile.svg',
			org_label: 'Test org__name2',
			org_type: 'existing',
		},
		{
			org_logo: 'images/RW-Logo-Icon-Profile.svg',
			org_label: 'Test org__name1',
			org_type: 'existing',
		},
		{
			org_logo: 'images/RW-Logo-Icon-Profile.svg',
			org_label: 'Test org__name2',
			org_type: 'existing',
		},
		{
			org_logo: 'images/RW-Logo-Icon-Profile.svg',
			org_label: 'Test org__name1',
			org_type: 'existing',
		},
		{
			org_logo: 'images/RW-Logo-Icon-Profile.svg',
			org_label: 'Test org__name2',
			org_type: 'existing',
		},
		{
			org_label: 'Test org__name3',
			org_type: 'new',
		},
	]
</script>

<main>
	<div class="org-container">
	{#each orgs as org, i}
		<OrgCard {org}></OrgCard>
	{/each}
	</div>
</main>

	<!-- TODO: added organizations break onto new line -->
<style>
	.org-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		margin-top: 4rem;
	}
</style>
