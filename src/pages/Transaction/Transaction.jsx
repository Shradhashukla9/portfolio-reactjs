import { Button, Card, Flex, Icon, Tag } from "@chakra-ui/react"
import Layout from "../../components/Layout"
import { FaArrowDown } from "react-icons/fa6";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Transactiontable from "./components/Transactiontable";

const Transaction = () => {
  const tabs =[{
    name:"All",
    count:349,
  },
  {
    name:"Deposit",
    count:114,
  },
  {
    name:"Withdraw",
    count:55,
  },
  {
    name:"Trade",
    count:34,
  }
];
  return (
    <Layout>
       <Flex justify="end" mt="6" mb="3">
         <Button leftIcon={<Icon as={FaArrowDown}/>}>Export BSV</Button>
       </Flex>
        <Card>
        <Tabs>
    <TabList py="4">
    { tabs.map((tab)=>(<Tab key={tab.name} display="flex" gap="2">
      {tab.name} <Tag colorScheme="gray" borderRadius="full">{tab.count}</Tag>
    </Tab>))
    }
      
    </TabList>

  <TabPanels>
    <TabPanel>
      <Transactiontable/>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
     
        </Card>
    </Layout>
  )
}

export default Transaction
