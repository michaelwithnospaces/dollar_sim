import './App.css';
import MainPage from './components/MainPage';
import JobPostingForm from './components/JobPostingForm';
import JobPostings from './components/JobPostings';
// import Nav from './components/Nav.js'
// import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <Nav /> */}
      <MainPage/>
      <JobPostingForm/>
      <JobPostings/>
        {/* <Routes>
          <Route exact path = "/" element = {<MainPage />} />
          <Route exact path = "/finance/jobPostings" element = {<JobPostings/>} />
          <Route exact path = "/finance/jobPostingsForm" element = {<JobPostingForm/> } />
        </Routes> */}
    </div>
  );
}

export default App;
