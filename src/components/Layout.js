import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    page: {
        background: '#f9f9f9',
        width: '100%'
    }
})

export default function Layout({ children }) {
    const classes = useStyles()

    return (
        <div>
            {/* App Bar */}

            {/* Side Bar */}
            
            <div className={classes.page}>
            {children}
            </div>
        </div>
    )
}