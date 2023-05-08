import styles from './notFoundBlock.module.scss'

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>☹️</span>
        <br />
        Нічого не знайдено
      </h1>
      <p className={styles.description}>На жаль ця сторінка не знайдена на нашому сайті</p>
    </div>
  )
}
export default NotFoundBlock