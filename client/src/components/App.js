import Navbar from './Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from './Homepage';
import RegisterForm from './RegisterForm';
import Container from '@material-ui/core/Container';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Container maxWidth="lg" style={{ padding: '1em 0 1em 0' }}>
          <Route path="/" exact component={Homepage} />
          <Route path="/register" exact component={RegisterForm} />
          <Route path="/invite" exact component={Homepage} />
          <Route path="/ranking" exact component={Homepage} />
        </Container>
      </BrowserRouter>
    </div>
  );
};

export default App;
