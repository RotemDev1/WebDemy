import './Logo.css'
import { Link } from 'react-router-dom';

export const Logo = () => {
    return (
        <Link className='btn-header' to={`/home`}>
            <div className="logo">
                web<span>demy</span>
            </div>
        </Link>)
}