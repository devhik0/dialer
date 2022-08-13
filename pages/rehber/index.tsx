import styles from './index.module.css'
import { Button, Form } from 'react-bootstrap'
import { createClient, Entry, EntryCollection } from 'contentful'

const client = createClient({
  space: process.env.C_SPC_ID!,
  accessToken: process.env.C_ACC_TKN!
})

export type EntryFields = {
  adsoyad: string
  telefon: string
}

type RehberProps = {
  kisiler: Entry<EntryFields>[]
}

export const getStaticProps = async () => {
  const res: EntryCollection<EntryFields> = await client.getEntries({ order: 'fields.adsoyad', 'content_type': 'kisi' })

  return {
    props: {
      kisiler: res.items
    }
  }
}

const Rehber = ({ kisiler }: RehberProps) => {
  const kisiKart = () => kisiler.map(kisi => {
    const makeInitial = () => {
      const initial = kisi.fields.adsoyad.toUpperCase().split(" ")
      const ad = initial[0][0]
      const soyad = initial[1][0]
      return `${ad}${soyad}`
    }

    return (
      <div className={styles['kisi-container']} key={kisi.sys.id}>
        <div className={styles.avatar}>
          <span style={{ color: '#f6f6f6' }}>{makeInitial()}</span>
        </div>
        {kisi.fields.adsoyad}
      </div>
    )
  })

  return (
    <div className={styles.container}>
      {/* // todo: ADD SEARCH FUNCTION */}
      <Form className={styles.form}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
        <Form.Control type="search" placeholder="Kişilerde arayın" />
      </Form>
      <Button className={styles.eklebtn}>
        <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" fill="currentColor" className="bi bi-person-plus" viewBox="0 0 16 16">
          <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
          <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
        </svg>
        <span>Yeni kişi ekle</span>
      </Button>
      {kisiKart()}
    </div>
  )
}

export default Rehber