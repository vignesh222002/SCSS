import React from 'react'
import styles from '../../styles/rules/use/style.module.scss'
import paraStyle from '../../styles/rules/use/_para.module.scss'

function Use() {
  return (
    <>
        <div className={styles.head}>Use Rules Page</div>
        <div className={styles.para}>Use Paragraph</div>
        <div className={paraStyle.para}>Show Para Style Line</div>
    </>
  )
}

export default Use