import { Box, Grid, GridItem } from "@chakra-ui/react"
import Layout from "../../components/Layout"
import Portfoliosection from "./components/Portfoliosection"
import Pricesection from "./Pricesection"
import Transactions from "./components/Transactions"
import { extendTheme } from "@chakra-ui/react"
import Infocards from "./Infocards"

const Dashboard = () => {
  return (
    <Layout title="DASHBOARD">
         <Grid
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          xl: "repeat(2, 1fr)",
        }}
        gap="6"
      >
        <GridItem
          colSpan={{
            base: 1,
            xl: 2,
          }}
        >
          <Portfoliosection />
        </GridItem>
        <GridItem colSpan={1}>
          <Pricesection />
        </GridItem>
        <GridItem colSpan={1}>
          <Transactions />
        </GridItem>
        <GridItem colSpan={1}>
         <Infocards
         imgUrl="/dot_bg.svg"
         text=" Learn more about Loans – Keep your Bitcoin, access it’s value without
          selling it"
         tagText="Loan"
         inverted={false}/>
        </GridItem>
        <GridItem colSpan={1}>
         <Infocards
         imgUrl="/grid_bg.svg"
         inverted={true}
         tagText="Contact"
        
         text="Learn more about our real estate, mortgage, and  corporate account services"
         />
        </GridItem>
     </Grid>
     
       
    </Layout>
  )
}

export default Dashboard
