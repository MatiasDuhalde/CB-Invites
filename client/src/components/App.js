import { BrowserRouter, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import Homepage from './Homepage';
import Navbar from './Navbar';
import RegisterForm from './RegisterForm';
import InviteForm from './InviteForm';
import RankingTable from './RankingTable';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Container maxWidth="md" style={{ padding: '1em 0 1em 0' }}>
          <Route path="/" exact component={Homepage} />
          <Route path="/register" exact component={RegisterForm} />
          <Route path="/invite" exact component={InviteForm} />
          <Route path="/ranking" exact component={RankingTable} />
        </Container>
      </BrowserRouter>
    </div>
  );
};

export default App;
