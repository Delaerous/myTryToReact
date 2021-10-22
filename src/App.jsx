
import { Route } from 'react-router';

import  {Header, Home, Cart} from './reactComponents';




function App() {
  return (
    <div className="App">
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/home" component={Home} exact/>
        <Route path="/cart" component={Cart} exact/>
      </div>
    </div>
    </div>
  );
}

export default App;
