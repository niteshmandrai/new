import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link,NavLink } from 'react-router-dom'


function Header() {
  return (

      <HStack p={4} shadow={"base"} 
      bgColor={"black"}>

<NavLink
         to={"/"}
            className={({isActive}) =>
                ` font-bold
                ${isActive?"text-white":"text-white"}
                ${isActive?"border-b":""}
                  `
            }
        >
            Home
        </NavLink>


        

        <NavLink
         to={"/exchanges"}
            className={({isActive}) =>
                ` font-bold
                ${isActive?"text-white":"text-white"}
                ${isActive?"border-b":""}
                  `
            }
        >
            Exchanges
        </NavLink>
        
        
        <NavLink
         to={"/coins"}
            className={({isActive}) =>
                ` font-bold
                ${isActive?"text-white":"text-white"}
                ${isActive?"border-b":""}
                  `
            }
        >
            Coins
        </NavLink>


        
      </HStack>




    )
}

export default Header