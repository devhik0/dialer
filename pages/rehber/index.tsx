import styles from './index.module.css'

const Rehber = () => {
  // todo: add graphql api 
  const kisiler = ['ahmet', 'veli', 'hüseyin']

  const kisi = () => kisiler.map(kisi => <div className={styles.kisi} key={kisi}>{kisi}</div>)

  return (
    <div>
      {kisi()}
    </div>
  )
}

export default Rehber