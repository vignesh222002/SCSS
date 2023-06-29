import React from 'react'
import style1 from '../../styles/rules/extends/style.module.scss'
import style2 from '../../styles/rules/extends/_blue.module.scss'

function Extends() {
    return (
        <>
            <div className={style2.extendColor}>Extends Page 1</div>
            <div className={style2.blue}>Extends Page 2</div>
        </>
    )
}

export default Extends