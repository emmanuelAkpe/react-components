import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';     
import Paragraph from './components/Paragraph';
import { Input } from './components/Input';
import { Myself } from './components/Myself';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Navbar/>  
      <Paragraph/>        
      <Input/>
      <Myself name='Emmanuel' age="15" gender="Male"/>                                                      
      <Myself name='Ama' age="35" gender="female"/>                                                      
      <Myself name='Kojo' age="26" gender="Male"/>  
      <Counter/>                                                    
    </div>
  );
}

export default App;
