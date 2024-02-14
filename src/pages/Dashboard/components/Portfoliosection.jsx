import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react"
import { CiCircleInfo } from "react-icons/ci";
import { MdDownload } from "react-icons/md";

const Portfoliosection = () => {
  return (
    <HStack bg="white" borderRadius="xl" p="6" gap="16px" justify="space-between" flexDir={{
        base: "column",
        xl: "row",
      }}
      spacing={{
        base: 4,
        xl: 0,
      }}
      align={{
        base: "flex-start",
        xl: "center",
      }}>
        <Stack>

            <HStack>
                <Text fontSize="14px">Total portfolio value</Text>
                <Icon as={CiCircleInfo}/>
                
            </HStack>
            <Text  fontSize="24px" fontWeight="bold">₹ 112,312.24</Text>
          </Stack>  
          <Stack spacing="4">
              <HStack>
                <Text fontSize="14px">Wallet Balances</Text>
                
            </HStack>
            <Text  fontSize="24px" fontWeight="bold">22.39401000 <Tag>BTC</Tag></Text>
        </Stack>
      <HStack justify="space-between">
      <Button leftIcon={<Icon as={MdDownload} />}>Deposit</Button>
        <Button leftIcon={<Icon as={MdDownload} />}>Withdraw</Button>
      </HStack>
    </HStack>
  )
}

export default Portfoliosection
