import { Route } from 'react-router-dom';
import Home from '../components/Home.jsx';

function App() {
  return (
    <div>
      <Route exact path='/'>
        <Home />
      </Route>
    </div>
  );
}

export default App;
