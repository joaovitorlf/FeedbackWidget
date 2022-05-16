import { Menu2 } from './components/Menu2'
import { Widget } from './components/Widget'
import LFlogo from './LFlogo.svg'

export function App() {
  return (
    <div className="App">
      <Menu2 />
      
      <div className='p-4 flex justify-center items-center'>
        <img src={LFlogo} className="App-logo " alt="logo" />
      </div>

      <Widget />
    </div>
  )
}

export default App