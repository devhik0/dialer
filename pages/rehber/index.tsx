import styles from './index.module.css'
import { createClient } from 'contentful'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
})

console.log('Token: ', process.env.CONTENTFUL_ACCESS_TOKEN)
// ! fixme: expected param accesstoken error !

// client.getEntries({ 'content_type': 'kisi' })
//   .then((response) => console.log(response.items[0]))
//   .catch(console.error)

const Rehber = () => {
  // const res = client.getEntries({ 'content_type': 'kisi' })
  //   .then((response) => console.log(response.items))
  //   .catch(console.error)

  // const kisiler = res.items

  // const kisi = () => kisiler.map(kisi => <div className={styles.kisi} key={kisi}>{kisi}</div>)

  return (
    <div>
      {/* {kisi()} */}
    </div>
  )
}

export default Rehber