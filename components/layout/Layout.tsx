import Navbar from "./Navbar"
import styles from './Layout.module.css'

type LayoutProps = {
  children: React.ReactNode,
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <main>
        {children}
      </main>
      <Navbar />
    </div>
  )
}

export default Layout