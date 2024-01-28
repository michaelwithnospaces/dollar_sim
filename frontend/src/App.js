import './App.css';
import MainPage from './components/MainPage';
import JobPostingForm from './components/JobPostingForm';
import JobPostings from './components/JobPostings';
import Nav from './components/NavBar';
import Store from './components/Store';
import ShoppingCart from './components/ShoppingCart';
import Parent from './components/Parent';

// import { Routes, Route} from 'react-router-dom';

function App() {
  let component
  switch (window.location.pathname){
    case "/":
      component = <MainPage/>
      break;
    case "/jobPostings":
      component = <JobPostings/>
      break;
    case "/jobPostingForm":
      component = <JobPostingForm/>
      break;
    case "/store":
      component = <Store/>
      break;
    case "/shoppingCart":
      component = <ShoppingCart/>
      break;
    case "/parent":
      component = <Parent/>
      break;
  }
  return (
    <div>
      <Nav/>
      {component}
      {/* <MainPage/>
      <JobPostingForm/>
      <JobPostings/> */}
        {/* <Routes>
          <Route exact path = "/" element = {<MainPage />} />
          <Route exact path = "/finance/jobPostings" element = {<JobPostings/>} />
          <Route exact path = "/finance/jobPostingsForm" element = {<JobPostingForm/> } />
        </Routes> */}
    </div>
  );
}

export default App;
