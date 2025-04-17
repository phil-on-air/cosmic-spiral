import CosmicSpiral from './components/CosmicSpiral'
import './App.css'

function App() {
  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      overflow: 'hidden',
      position: 'fixed',
      top: 0,
      left: 0
    }}>
      <CosmicSpiral />
    </div>
  )
}

export default App
