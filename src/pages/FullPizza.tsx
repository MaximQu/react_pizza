import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface MyData {
  imageUrl: string;
  title: string;
  price: number;
}

const FullPizza: FC = () => {
  const [pizza, setPizza] = useState<MyData>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const { data } = await axios.get('https://644832677bb84f5a3e54c011.mockapi.io/items/' + id);
        setPizza(data);
      } catch (error) {
        alert('Помилка при отриманні піци!');
        navigate('/');
      }
    };
    fetchPizza();
  }, []);

  if (!pizza) {
    return <>Завантаження...</>;
  }

  return (
    <div className="container">
      <div className="pizza__inner">
        <img className="pizza__img" src={pizza.imageUrl} alt={pizza.title} />
        <h2 className="pizza__title">{pizza.title}</h2>
        <span className="pizza__price">
          <b>{pizza.price}₴</b>
        </span>
      </div>
      <button>Назад</button>
    </div>
  );
};

export default FullPizza
