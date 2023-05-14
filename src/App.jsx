import Home from './routes/home/home.component';
import { Routes, Route } from 'react-router-dom';
import SigninComponent from './routes/home/signin/SigninComponent';

function App() {

  return (

    <Routes>
     
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SigninComponent />} />
     
    </Routes>
  );
    
}

export default App;
