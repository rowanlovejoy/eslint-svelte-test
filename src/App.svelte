<script lang="ts">
	import CustomList from './lib/CustomList.svelte';
	import type { ListItem } from './lib/types';

	const items: ListItem[] = [
		{
			title: 'Svelte.dev',
			link: 'https://svelte.dev',
		},
		{
			title: 'TypeScript ESLint',
			link: 'https://typescript-eslint.io',
		},
		{
			title: 'TypeScript',
			link: 'https://www.typescriptlang.org',
		},
	];

	const openLink = (item: ListItem) => {
		window.location.replace(item.link);
	};
</script>

<main>
	<CustomList
		{items}
		let:item
	>
		<div>
			{item.title}
			<button
				on:click={() => {
					openLink(item);
				}}>Open Link</button
			>
		</div>
	</CustomList>
</main>
