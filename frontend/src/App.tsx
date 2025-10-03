import Dither from './components/Dither'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'

function App() {
  // Create a background root div if it doesn't exist
  useEffect(() => {
    let bgRoot = document.getElementById('bg-root')
    if (!bgRoot) {
      bgRoot = document.createElement('div')
      bgRoot.id = 'bg-root'
      document.body.appendChild(bgRoot)
    }
    return () => {
      // Optionally clean up if needed
      // document.body.removeChild(bgRoot)
    }
  }, [])

  return (
    <>
      {/* Dither background rendered via portal */}
      {typeof window !== 'undefined' && createPortal(
        <div
          style={{
            position: 'fixed',
            inset: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        >
          <Dither mouseRadius={0.15} />
        </div>,
        document.getElementById('bg-root') || document.body
      )}
      {/* Site content goes here */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* ...your site content... */}
      </div>
    </>
  )
}

export default App