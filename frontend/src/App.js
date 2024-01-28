import './App.css';
import MainPage from './components/MainPage';
import JobPostingForm from './components/JobPostingForm';
import JobPostings from './components/JobPostings';
import Nav from './components/NavBar';
import Store from './components/Store';
import ShoppingCart from './components/ShoppingCart';
import Parent from './components/Parent';
import EditJobPostingForm from './components/EditPostingForm';

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
    // case "/editJobPosting":
    //   component = <EditJobPostingForm/>
    //   break;
  }
  return (
    <div>
      <Nav/>
      {component}
    </div>
  );
}

export default App;
