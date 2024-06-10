import { ReactNode } from "react"
import React from "react"

const RootLayout = ({children}: {children: ReactNode}) => {
    return (
        <>
            <main>{children}</main>
        </>
    )
}

export default RootLayout