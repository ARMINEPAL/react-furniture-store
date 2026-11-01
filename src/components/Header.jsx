import React, { useState } from 'react'
import {
  FaShoppingCart,
  FaBars,
  FaTimes
} from 'react-icons/fa'
import Order from './Order'

const showOrders = (props) => {
    const sum = props.orders.reduce(
        (acc, el) => acc + Number.parseFloat(el.price),
        0
      )
    return (
        <div>
            {props.orders.map(el => (
                <Order key={el.key} item={el} onDelete = {props.onDelete}/>
            ))}
            <p className='sum'>Сумма: {sum.toFixed(2)}$ </p>
        </div>
    )
}

const showNothing = () => {
    return (
        <div className='empty'>
            <h2>Товаров нет</h2>
        </div>
    )
}
export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header>
        <div>
            <span className='logo'>House Staff</span>
            <ul
  id="main-navigation"
  className={`nav ${menuOpen ? 'nav--open' : ''}`}
>
  <li>Про нас</li>
  <li>Контакты</li>
  <li>Кабинет</li>
</ul>

<button
  type="button"
  className="menu-toggle"
  aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
  aria-expanded={menuOpen}
  aria-controls="main-navigation"
  onClick={() => setMenuOpen(prev => !prev)}
>
  {menuOpen ? <FaTimes /> : <FaBars />}
</button>
            <button
  type="button"
  className={`shop-cart-button ${cartOpen ? 'active' : ''}`}
  aria-label="Корзина"
  aria-expanded={cartOpen}
  onClick={() => setCartOpen(prev => !prev)}
>
  <FaShoppingCart aria-hidden="true" />
</button>

            {cartOpen && (
                <div className='shop-cart'>
                {props.orders.length > 0 ? showOrders(props) : showNothing ()}
                </div>
            )}
        </div>
        <div className="presentation">
  <div className="presentation__content">
    <p className="presentation__eyebrow">
      Уют начинается с деталей
    </p>

    <h1 className="presentation__title">
      Мебель, в которую хочется возвращаться
    </h1>

    <p className="presentation__description">
      Создавайте пространство, в котором каждый
      день становится особенным. Мебель для
      вашего дома с заботой о комфорте.
    </p>

    <a href="#catalog" className="presentation__button">
      Смотреть каталог →
    </a>
  </div>
</div>
    </header>
    )
}
