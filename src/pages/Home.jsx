import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { selectFilter, setCategoryId, setCurrentPage, setFilters } from '../redux/slices/filterSlice'
import { fetchPizzas, selectPizzaData } from '../redux/slices/pizzaSlice'
import qs from 'qs'
import Categories from "../components/Categories"
import PizzaBlock from "../components/PizzaBlock"
import Skeleton from "../components/PizzaBlock/Skeleton"
import Sort, { sortList } from "../components/Sort"
import Pagination from '../components/Pagination'

const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isMounted = useRef(false)

  const { items, status } = useSelector(selectPizzaData)
  const { categoryId, sort, currentPage, searchValue } = useSelector(selectFilter)

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id))
  }

  const onChangePage = number => {
    dispatch(setCurrentPage(number))
  }

  const getPizzas = async () => {
    const sortBy = sort.sortProperty.replace('-', '');
    const orderBy = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';
    dispatch(
      fetchPizzas({
        sortBy, orderBy, category, search, currentPage
      }),
    )
    window.scrollTo(0, 0)
  }
  // Якщо змінили параметри і був перший рендер
  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage,
      })
      navigate(`?${queryString}`)
    }
    isMounted.current = true
  }, [categoryId, sort.sortProperty, currentPage])

  // Якщо був перший рендер, то перевіряємо URL-параметри і зберігаємо в редаксі
  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1))
      const sort = sortList.find((obj) => obj.sortProperty === params.sortProperty)
      dispatch(
        setFilters({
          ...params,
          sort
        })
      )
    }
  }, [])

  // Якщо був перший рендер то запрошуємо піци
  useEffect(() => {
    getPizzas()
  }, [categoryId, sort.sortProperty, searchValue, currentPage])

  const pizzas = items.map(obj => (
    <Link key={obj.id} to={`/pizza/${obj.id}`}>
      <PizzaBlock {...obj} />
    </Link>)
  )
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />)

  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Всі піци</h2>
      {
        status === 'error' ? (
          <div className='content__error-info'>
            <h2>Сталася помилка</h2>
            <p> На жаль не вдалося отримати піци. <br /> Спробуйте повторити спробу пізніше.</p>
          </div>
        ) : (
          <div className="content__items">{status === 'loading' ? skeletons : pizzas}</div>
        )
      }
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </>
  )
}
export default Home