import { Box, Button, Center, Container, Flex, HStack, Heading, Icon, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsPersonLinesFill } from "react-icons/bs"
import { BsLayoutTextSidebarReverse } from "react-icons/bs";
const Topnav = ({title, onOpen}) => {
  return (
    <Box boxShadow="xl" px="4">
      <HStack maxW="60rem" h="16" justify="space-between" px="32" mx="auto">
        <Icon as={BsLayoutTextSidebarReverse} onClick={onOpen} display={{
           base:"block",
           lg:"none", 
          }}
        />
        <Heading>{title}</Heading>
        <Menu>
            <MenuButton  as={Button} fontSize="24px">
                  <Icon as={BsPersonLinesFill}/>
            </MenuButton>
            <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
        </Menu>
        
        
      </HStack>
    </Box>
  )

  
        
    
}

export default Topnav
