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
            {/* <li>
                <a href="/editJobPosting">Edit Job Post</a>
            </li> */}
            <li>
                <a href="/store">Store</a>
            </li>
            <li>
                <a href="/shoppingCart">Shopping-Cart</a>
            </li>
        </ul>
    </nav>
    );
}

export default Navbar;