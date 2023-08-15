<script lang="ts">
	import type { ListItem } from './types';

	export let items: ListItem[];
</script>

<div>
	<ul>
		{#each items as item (item.title)}
			<li>
				<slot {item} />
			</li>
		{/each}
	</ul>
</div>
