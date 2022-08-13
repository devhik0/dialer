import Navbar from "./Navbar"
import styles from './Layout.module.css'
import Image from "next/image"
import { Button } from "react-bootstrap"

type LayoutProps = {
  children: React.ReactNode,
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <main>
        {children}
      </main>
      {/* // * FAB */}
      <Button className={styles.fab}>
        <Image src='/dialpad.svg' width={32} height={32} />
      </Button>
      <Navbar />
    </div>
  )
}

export default Layout