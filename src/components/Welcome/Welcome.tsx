import React from 'react'
import styles from './Welcome.module.css'

export default ({company}) => {
    return(
        <section className={styles.container}>
            <div className={styles.logo}>
                
            </div>
            <div className="content">
                <h1>Welcome {company}</h1>
            </div>
        </section>
    )
}