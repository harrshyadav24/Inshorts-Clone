import logo from './logo.svg';
import './App.css';

// Components
import Header from './Components/Header';
import InfoHeader from './Components/InfoHeader.jsx';
import Articles from './Components/Articles.jsx'
import { Box, styled } from '@mui/material';

const Container = styled(Box)(({ theme }) => ({
  width: '59%',
  margin: '110px auto 0 auto',
  [theme.breakpoints.down('md')]: {
    width: '75%'
  },
  [theme.breakpoints.down('sm')]: {
    width: '85%'
  }
}));


function App() {
  
  return (
    <div className="App">
      <Header />
      <Container>
        <InfoHeader />
        <Articles />
      </Container>
    </div>
  );
}

export default App;
