import React, { FunctionComponent, PropsWithChildren } from 'react'
import Header from './Header/Header'
import styles from './Layout.module.css'


const Layout: FunctionComponent<PropsWithChildren> = ({children}) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
    </div>
  )
}

export default Layout