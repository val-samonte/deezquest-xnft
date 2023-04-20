import { registerRootComponent } from 'expo';
import { IFRAME_ORIGIN, useXnft } from './providers/XnftProvider';
import tw from 'twrnc';

function App() {
	const { backpack, setAppIframeElement } = useXnft();

	return (
		<iframe
			src={`${IFRAME_ORIGIN}?publicKey=${encodeURIComponent(
				backpack.publicKey.toBase58()
			)}`}
			style={tw`border-0 w-full h-full`}
			ref={(node) => {
				if (node) {
					setAppIframeElement(node);
				}
			}}
		/>
	);
}

export default registerRootComponent(App);
