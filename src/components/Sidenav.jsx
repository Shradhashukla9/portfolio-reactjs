import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react"
import { MdDashboard } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { FcOnlineSupport } from "react-icons/fc";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
const Sidenav = () => {
    const navlinks=[
      {
        icon :MdDashboard,
        text:"Dashboard",
        link:"/"
      },
      {
        icon:GrTransaction,
        text:"Transactions",
        link:"/Transaction"
      },
    ];
  return (

    <Stack justify="space-between" boxShadow={{base:"none", lg:"lg"}} w={{base:"full",lg:"16rem"}} h="100vh">
     <Box>
        <Heading textAlign="center"fontSize="20px" as="h1" pt="3.5rem">@SHRADHA</Heading>
        {
        navlinks.map((nav)=>(
          <Link to ={nav.link} key={nav.text}>
            <HStack mx="3"  py="3"px="4" _hover={{
                bg:"#F3F3F7",
                color: "#797E82"
                
               }}>
                <Icon as={nav.icon}/>
                <Text fontSize="14px">{nav.text}</Text>

            </HStack>
          </Link>   
          ))
        }
      </Box>
      <Box>
         <Link to ="/Support">
         <HStack mx="3"  py="3"px="4" _hover={{
                bg:"#F3F3F7",
                color: "#797E82"
                
              }}>
                <Icon as={FcOnlineSupport}/>
                <Text fontSize="14px">Support</Text>

            </HStack>
         </Link>
      </Box>
      </Stack  >
  )  
}

export default Sidenav
