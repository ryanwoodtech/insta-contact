<script>
	export let org;

	let org_add = 'images/add.svg' 

	let org_logo = org.org_logo;
	let org_label = org.org_label;
	let org_type = org.org_type;

</script>

<div class="org__card">

{#if org_type == 'existing'}
	<img src={org_logo} class="org__img"   alt="Organization logo">
	<h3 class="org__label">{org_label}</h3>
{/if}

{#if org_type == 'new'}
	<h3 class="org__label">{org_label}</h3>
	<img src={org_add} class="org__img"  alt="New organization add button">
{/if}
</div>

<style>
	.org__card{
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 1rem;
		padding: 1rem;
		width: 30rem;
		height: auto;
		box-shadow: 0px 2px 13px rgba(0, 0, 0, 0.25);
	}

	.org__img {
		width: 30%;
	}

	.org__label{
		margin: 1rem 0;
  }
</style>
