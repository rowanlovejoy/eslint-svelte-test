import './app.css';
import App from './App.svelte';

const app = new App({
	target: (() => {
		const root = document.getElementById('app');
		if (!root) {
			throw new Error("Couldn't find root");
		}
		return root;
	})(),
});

export default app;
