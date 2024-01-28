// import { useReducer } from "react";
// import styles from "./Nav.module.css";
// import {Link, useMatch, useResolvedPath } from "react-router-dom";
// import Logo from './DollarSim-logos_black.png';

// function Nav(){
//     return(
//         // pages
//         <nav> 
//             <ul id={styles.nav}>
//                 <CustomLink to="/"><img src={Logo}/></CustomLink>
//                 <CustomLink to="/finance/jobPostings">Jobs</CustomLink>
//                 {/* <CustomLink to="/finance/jobPostingsForm">Job Posting Form</CustomLink> */}
//             </ul>
//         </nav>
//     );
// }

// function CustomLink ({to, children, ...props}){
//     const resolvedPath = useResolvedPath(to)
//     const isActive = useMatch({path: resolvedPath.pathname, end: true})
//     return (
//         <li className = {isActive ? "active" : ""}>
//             <Link to={to} {...props}>
//                 {children}
//             </Link>
//         </li>
//     )
// }

// export default Nav;