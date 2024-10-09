import { Link } from "react-router-dom";
import 'Menu.css'
export default function Menu () {
    const MENU = ['На главную', 'Обо мне', 'Отзывы', 'Блог']
    return (
        <ul className="menu">
            {MENU.map((el,i)=> <Link key={'${i}-menu-item'} to='/'>{el}</Link>)}
        </ul>
        )
}