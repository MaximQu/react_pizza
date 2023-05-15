import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './notFoundBlock.module.scss';

export const NotFoundBlock: FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Нічого не знайдено
      </h1>
      <p className={styles.description}>На жаль ця сторінка не знайдена на нашому сайті</p>
      <Link to="/">
        <button className="button">Назад</button>
      </Link>
    </div>
  );
};
