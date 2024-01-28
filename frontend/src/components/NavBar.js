import styles from './NavBar.module.css';
import Logo from './DollarSim-logos_black.png';
const Navbar = () => {
    return (
    <nav>
        <a href="/"><img src={Logo} className='Logo'/></a>
        <ul className={styles.nav}>
            <li>
            <a href="/jobPostings">Job Postings</a>
            </li>
            <li>
                <a href="/store">Store</a>
            </li>
            <li>
                <a href="/shoppingCart">Shopping-Cart</a>
            </li>
            <li>
                {/* <a href="/parent"><button class="dropbtn">Parent</button></a>
                <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                </div> */}
                <label for="dog-names"></label> 
                <select name="dog-names" id="dog-names" onchange="location = this.value;"> 
                    <option value="Parent">Parent</option> 
                    <option value="/jobPostingForm/">Job-Post-Form</option>
                    <option value="AddItem">AddItem</option>    
                </select>
            </li>
        </ul>
    </nav>
    );
}

export default Navbar;