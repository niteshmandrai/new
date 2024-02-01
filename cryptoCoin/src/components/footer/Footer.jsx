import { Avatar, Box, Stack,Text, VStack } from '@chakra-ui/react'
import React from 'react'
const n=`https://lh3.googleusercontent.com/pw/ABLVV86bkV42WEJ2LlOlsNmLLrYVafa4nhibQIWAQ3rwxz1c9xmcPqHMwyBXd36JXYGXrZqWtMk04go6iqWbx-XTNZq6HJumDZBzhalCSG9IOyfNgfGA3NWgx3_VLmxEdCRHffmSTqujeA9ZPKAlI-FDl3Oo1cVzM1p8STTuUdaSLqTqempzItQWiAjWQCgB0qj7d2pJ4tK3M9dRg03J3AQdvSB-tASMavcXVthZVnY8H0ldc68F71L74-S2mgzXenBFK6uc70FsKJ7ph7NkJxW3I-SyqpDMf_d2X6pv9tgohDKwIHdKXtjmkcNgrtpJn33bVObNp03RbzaQlNWCs1bD0xSd_1k_Ib-0D5Un8XP3Ld1uDPTG2oBfQlhyFQ7fOMZv_DHR5t1KKabdHSSerlERIoxpKsgZZyEFq1Ps-NxCEG4Us7Ua85LqJCM9QctUFtfbfzNAgcOUQJLOLVieUL7INX86tPK7HSONmGmczpSAgIn5BfMh3BjZmp97J-UPBCD-lROap7AUiu652ZIHQxpBxP1Q31nPopE3Jb7WCyUfoplxoKIb0gvbGqyI_P_x8xY_-_jrQpXRmJVP6TApwHl1RwyxholsSvFFRilMHwP0P4achIaPjm-MYt7TxTB8EH26oVmEV8k9OjGvx5_nFL7fMyDeC9zEQCtjf-w57fjn0b9eh0THSIBGNRiv3M6jQ5zQjYw0g59VrMnR5HriPZqaFAc8nQOBPrrqiTlx7yHyTRvV0tTRk6Xe2AiNfnfqc9FfNTHkPxryLHdlAwIDjkhlzEsJhh--5O7vfKCujSpAosnl3LiebEYVLvLgzS1awFGYjW34RFbiNXnqJv_vas78pbPbezcDKvMVdQGsqtpCjkraTdiS_87iInq2dM-S3IVtoBTBdWBFQuW7R60NmV5LRgWhASM=w866-h969-s-no-gm?authuser=0`

function Footer() {
  return (
    <Box bgColor={"black"}
    color={"white"}
    minH={"48"}
    px={16}
    py={[16,8]}>

        <Stack 
        direction={["column","row"]}
        h={"full"}
        alignItems={"center"}>

            <VStack w={"full"}
             alignItems={["center","flex-start"]}>

                <Text fontWeight={"bold"}>About Us</Text>
                <Text>Crypto Trading App,at Reasonable Price..</Text>




            </VStack>
            <VStack>


                  <Text>Created By:</Text>
                  <Text fontWeight={"bold"}>Nitesh Mandrai</Text>

            </VStack>



        </Stack>






    </Box>
  )
}

export default Footer