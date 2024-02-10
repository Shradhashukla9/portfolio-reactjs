import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
  } from '@chakra-ui/react'
import Sidenav from './sidenav'

const Sidedrawer = ({isOpen,onClose}) => {
  return (
    <>
    
    <Drawer
      isOpen={isOpen}
      placement='left'
      onClose={onClose}
     
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
       

        <DrawerBody>
          <Sidenav/>
        </DrawerBody>

        <DrawerFooter>
          <Button variant='outline' mr={3} onClick={onClose}>
            logout
          </Button>
          <Button colorScheme='blue'>Home</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  </>
  )
}

export default Sidedrawer
