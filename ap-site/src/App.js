import './App.scss';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Home';
import APCalc from './components/Subjects/APCalc'
import Contact from './components/Contact'
import APWorld from './components/Subjects/APWorld'
import APPhysics1 from './components/Subjects/APPhysics1'
import APLit from './components/Subjects/APLit'
import APLang from './components/Subjects/APLang'
import APChem from './components/Subjects/APChem'
import APComp from './components/Subjects/APComp'

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home/>}/>
            <Route path="APCalc" element={<APCalc/>}/>
            <Route path="APWorld" element={<APWorld/>}/>
            <Route path="APPhysics1" element={<APPhysics1/>}/>
            <Route path="APLit" element={<APLit/>}/>
            <Route path="APLang" element={<APLang/>}/>
            <Route path="APChem" element={<APChem/>}/>
            <Route path="APComp" element={<APComp/>}/>
            <Route path="Contact" element={<Contact/>}/>
          </Route> 
        </Routes>
    </HashRouter>
    </>
  )
}

export default App;
