import { FC } from 'react';
import { Link } from 'react-router-dom';
import cartEmptyImg from '../../assets/img/empty-cart.png';

export const CartEmpty: FC = () => {
  return (
    <div className="cart cart--empty">
      <h2>
        Корзина пуста <span>😕</span>
      </h2>
      <p>
        Ймовірніше всього, Ви ще не замовили піцу.
        <br />
        Для того, щоб замовити піцу, перейдіть на <b>головну сторінку</b>.
      </p>
      <img src={cartEmptyImg} alt="Empty cart" />
      <Link to="/" className="button button--black">
        <span>Повернутися назад</span>
      </Link>
    </div>
  );
};
