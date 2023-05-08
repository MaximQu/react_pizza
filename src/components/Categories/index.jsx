const Categories = ({value, onChangeCategory}) => {
  const allCategories = [
    'Всі',
    'Мясні',
    'Вегетаріанскі',
    'Гриль',
    'Гострі',
    'Закриті',
  ]

  return (
    <div className="categories">
      <ul className="categories__list">
        {
          allCategories.map((categoryName, i) => (
            <li key={i} onClick={() => onChangeCategory(i)} className={value === i ? 'active categories__item' : 'categories__item'}>{categoryName}</li>
          ))
        }
      </ul>
    </div>
  )
}
export default Categories