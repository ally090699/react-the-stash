import {Link} from 'react-router-dom';
import './Footer.css';

export default function Footer(){
    return (
        <footer>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <p>© 2025 Allison So. All rights reserved.</p>
        </footer>
    )
}