import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react"
import Sidenav from "./sidenav"
import Topnav from "./Topnav"
import Sidedrawer from "./Sidedrawer";


const Layout = ({title ,children}) => {
    const {isOpen,onClose,onOpen} = useDisclosure();
  return (
    <Flex >
        <box  display={{
        base: "none",
        lg:"block",
      }}>
       <Sidenav />
      </box>
    
      <Sidedrawer isOpen={isOpen}onClose={onClose}/>
      <Box flexGrow={1}>
        <Topnav title={title} onOpen={onOpen} />
        <Container
          overflowX="hidden"
          overflowY="auto"
          h="calc(100vh - 88px)"
          mt="6"
          maxW="70rem"
        >
          {children}
        </Container>
      </Box>

    </Flex>
  )
}

export default Layout
