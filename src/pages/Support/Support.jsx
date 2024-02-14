import { Stack } from "@chakra-ui/react";
import Layout from "../../components/Layout";
import { AiTwotoneMessage } from "react-icons/ai";
import Infocards from "../Dashboard/Infocards";
import SupportCard from "./components/SupportCard";
import { IoMdMail } from "react-icons/io";
import ContactCard from "./components/ContactCard";

const Support = () => {
    return (
      <Layout>
        <Stack spacing="4rem">
          <SupportCard
            icon={IoMdMail}
            leftComponent={<ContactCard />}
            title="Contact Us"
            text=" Have a question or just want to know more? Feel free to reach out to
            us."
          />
          <SupportCard
            icon={AiTwotoneMessage}
            leftComponent={
              <Infocards
                inverted={true}
                tagText="Contact"
                imgUrl="/grid_bg.svg"
                text="Learn more about our real estate, mortgage, and  corporate account services"
              />
            }
            title="Live Chat"
            text=" Don’t have time to wait for the answer? Chat with us now."
          />
        </Stack>
      </Layout>
    );
  };
  
  export default Support;


