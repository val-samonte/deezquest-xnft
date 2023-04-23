import { registerRootComponent } from 'expo'
import { IFRAME_ORIGIN, useXnft } from './providers/XnftProvider'
import tw from 'twrnc'
import XnftContextProvider from './providers/XnftProvider'

function App() {
  const { setAppIframeElement } = useXnft()

  return (
    <iframe
      allow={`fullscreen;clipboard-write ${IFRAME_ORIGIN}`}
      // sandbox='allow-same-origin allow-scripts allow-forms allow-popups'
      src={IFRAME_ORIGIN}
      style={tw`border-0 w-full h-full`}
      ref={(node) => {
        if (node) {
          setAppIframeElement(node)
        }
      }}
    />
  )
}

function Root() {
  return (
    <XnftContextProvider>
      <App />
    </XnftContextProvider>
  )
}

export default registerRootComponent(Root)
