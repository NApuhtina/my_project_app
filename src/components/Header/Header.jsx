import Menu from '../Menu/Menu.jsx';
import { useNavigate } from "react-router-dom";
import './Header.css'
import Button from '../Button/Button.jsx';
export default function Header() {
    const navigate = useNavigate()
    return (
        <header className="header">
            <div className="logo">Апухтина Н.В.</div>
            <Menu/>
            <Button className='button-contact' onClick={() => navigate('contacts')} label='Контакты'/>
            <div>
                <input className='type-checkbox' id='toogle' type='checkbox' name='name'/>
                <label for='toogle'> ::before
                <span className='light_theme'>Темная тема</span>
                <span className='black_theme'> Светлая тема</span>
            </label>
        </div>
</header>
)
}