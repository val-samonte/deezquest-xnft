import { registerRootComponent } from 'expo';

function App() {
	return (
		<iframe
			src={'https://deezquest.vercel.app/'}
			style={{ width: '100%', height: '100%', border: 'none' }}
		/>
	);
}

export default registerRootComponent(App);
