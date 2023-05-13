import { FC } from 'react';
import { Link } from 'react-router-dom';
import NotFoundBlock from '../components/NotFoundBlock';

const NotFound: FC = () => {
  return (
    <>
      <NotFoundBlock />
      <Link to="/">
        <button className="button">Назад</button>
      </Link>
    </>
  );
};

export default NotFound;
