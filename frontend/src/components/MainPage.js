import Logo from './DollarSim-logos_black.png';
import {useState} from 'react';
import Transactions from './Transactions';
const MainPage = () => {
  const [balance, setBalance] = useState(0);
  return (
    <div>
      {/* <header>
        <div className = 'header-item'><img src={Logo} className='Logo'/></div>
        <div className = 'header-item'><a>Jobs</a></div>
        <div className = 'header-item'>Chat</div>
        <div className = 'header-item'>Store</div>
        <div className = 'header-item'>Profile</div>
      </header> */}
      <div className='balance'>
        <h1>Welcome to DollarSim!</h1>
        <h1>Your Balance Is:</h1>
        <h1 style={{color: "rgb(22, 56, 68)"}}>${balance}</h1>
        <h2>Transactions</h2>
      </div>
      <Transactions setBalance = {setBalance}/>
    </div>
  );
}

export default MainPage;