import React, { FC } from 'react';

type CategoriesProps = {
  value: number;
  onChangeCategory: (idx: number) => void;
};

const allCategories = ['Всі', 'Мясні', 'Вегетаріанскі', 'Гриль', 'Гострі', 'Закриті'];

export const Categories: FC<CategoriesProps> = React.memo(({ value, onChangeCategory }) => {
  return (
    <div className="categories">
      <ul className="categories__list">
        {allCategories.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => onChangeCategory(i)}
            className={value === i ? 'active categories__item' : 'categories__item'}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
});
