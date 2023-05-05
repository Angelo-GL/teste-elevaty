import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css';

import Nav from '../components/template/Nav';
import Main from '../components/template/Main';
import Footer from '../components/template/Footer';
import Logo from '../components/template/Logo';


export default App => 
  <div className="app">
    <Logo></Logo>
    <Nav></Nav>
    <Main icon="home" title="Início" subtitle="Inserir subtítulo"/>
    <Footer></Footer>
  </div>

