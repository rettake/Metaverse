import styles from './BlockTimer.module.css'

const BlockTimer = () => {
  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <p className={styles.text}>
          Q1 2022
        </p>
        <div className={styles.outer_ellipse}>
          <div className={styles.inner_ellipse}>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlockTimer