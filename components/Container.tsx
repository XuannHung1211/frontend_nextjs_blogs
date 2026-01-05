import React, { FC, ReactNode } from 'react'
import MainMenu from './Navbar'

type ContainerProps = {
    children: ReactNode

}
const Container:FC<ContainerProps>= ({children} )=> {

  return (
    <div>
        <MainMenu/>
        {children}
  
    </div>
    )
}



export default Container


