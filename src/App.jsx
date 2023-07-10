import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar, ItemListContainer} from './components/index'

function App() {
  return (
    <div className='container'>
      <NavBar />
      <ItemListContainer greeting={'Bueenaas'} />
    </div>
  )
}

export default App
