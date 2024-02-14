import {  Button, HStack, Icon, Image, Stack, Text } from "@chakra-ui/react"
import { CustomCard } from "../../chakra/CustomCard"
import { BsGraphUpArrow } from "react-icons/bs";
import { CiCirclePlus ,CiCircleMinus} from "react-icons/ci";

const Pricesection = () => {
    const timestamps = ["7:15 PM", "7:55 PM", "8:55 PM", "9:55 PM", "10:55 PM"];
  return (
      <CustomCard>
        <HStack justify="space-between">
            <Stack spacing="4">
              <HStack>
                <Text fontSize="14px">Wallet Balances</Text>
                
              </HStack>
            
              <HStack flexDir="row" >
                <Text  fontSize="24px" fontWeight="bold">22.39401000 </Text>
                 <Icon as={BsGraphUpArrow}/>
                <Text  fontSize="sm" fontWeight="bold" color="purple">4% </Text>
               </HStack>
            </Stack>
        <HStack justify="space-between">
          <Button leftIcon={<Icon as={CiCirclePlus} />}>Deposit</Button>
          <Button leftIcon={<Icon as={CiCircleMinus} />}>Withdraw</Button>
        </HStack>
       </HStack>
       <Image w="100%" src="/graph.svg"/ >
       <HStack justify="space-between">
              {timestamps.map((timestamp) => (
                <Text key={timestamp} fontSize="sm" color="black.80">
                  {timestamp}
                </Text>
              ))}
            </HStack>
    </CustomCard>
  );
};

export default Pricesection
