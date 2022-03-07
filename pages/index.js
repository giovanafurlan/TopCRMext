import { Avatar, Box, Flex, Image, ListItem, Table, TableCaption, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import Nav from "./components/navbar/NavBar";
import { FcApproval } from "react-icons/fc";

export default function Home(){

  const dados1 =
    {nome: "Product 1", 
    logo: "https://goo.gl/Wk14oo",
    classificacao: "8.9 / 10", 
    classificacaog2: "4.8", 
    classificacaocapterra: "4.8",
    valorbase: "$18.6/mês",
    projetos: "10 - Ilimitado",
    ranking: "yes"}

  return(
    <>
    <Nav/>
    <Box>
      <Flex height='800px' 
      backgroundColor={'#05071c'} 
      justifyContent='space-around'>
        <Flex width='600px' 
        ml='200px' 
        mt='100px' 
        flexDirection={'column'} 
        color={'white'} >
          <Text fontSize='80px' 
          fontWeight='bolder' 
          textTransform='uppercase' 
          lineHeight='100%'>Os 10 melhores softwares de SEO</Text>
          <Text fontSize='20px' 
          mt='2vw'>Os 10 melhores softwares de SEO</Text>
        </Flex>
        <Image m='100px' src='https://top10seosoftware.com/wp-content/themes/top10seo/assets/img/winner-bg.svg'/>
      </Flex>
    </Box>
    {/* <Box display={'flex'} justifyContent={'center'} mt='5vw' m='2vw' flexDirection={'column'}> */}
      <Table size='lg'border='1px' w='500' h='800' display={'block'} overflow='scroll' m='2vw'>
        <Thead backgroundColor={'#05071c'}>
          <Tr>
            <Th color={'white'}>Nome</Th>
            <Th color={'white'}>Classificação dos 10 melhores softwares de SEO</Th>
            <Th color={'white'}>Classificação G2</Th>
            <Th color={'white'}>Classificação Capterra</Th>
            <Th color={'white'}>Valor base</Th>
            <Th color={'white'}># de Projetos</Th>
            <Th color={'white'}>Monitoramento de Rankings</Th>
            <Th color={'white'}>Pesquisa de Backlinks</Th>
            <Th color={'white'}>Pesquisa de Concorrentes</Th>
            <Th color={'white'}>Auditoria de Website</Th>
            <Th color={'white'}>Ferramentas PRO</Th>
            <Th color={'white'}>Recomendado Para</Th>
            <Th color={'white'}>Teste Gratuito</Th>
            <Th color={'white'}>Demo</Th>
            <Th color={'white'}>Site</Th>
          </Tr>
        </Thead>
        <Tbody overflow-y='auto'>
          <Tr>
            <Td><Avatar src={dados1.logo} display='flex' flexDirection={'column'}/>{dados1.nome}</Td>
            <Td>{dados1.classificacao}</Td>
            <Td>{dados1.classificacaog2}</Td>
            <Td>{dados1.classificacaocapterra}</Td>
            <Td>{dados1.valorbase}</Td>
            <Td>{dados1.projetos}</Td>
            <Td data={()=>
              {if(dados1.ranking === yes)
                <FcApproval/>
              else
                <FcApproval/>
                }}></Td>

          </Tr>
          <Tr>
            <Td><Avatar src='' display='flex' flexDirection={'column'}/>Webpeak</Td>
            <Td> </Td>
            <Td> </Td>
            <Td> </Td>
            <Td> </Td>
          </Tr>
          <Tr>
            <Td><Avatar src='' display='flex' flexDirection={'column'}/>Webpeak</Td>
            <Td> </Td>
            <Td> </Td>
            <Td> </Td>
            <Td> </Td>
          </Tr>
          <Tr>
            <Td><Avatar src='' display='flex' flexDirection={'column'}/>Webpeak</Td>
            <Td> </Td>
            <Td> </Td>
            <Td> </Td>
            <Td> </Td>
          </Tr>
          <Tr>
            <Td><Avatar src='' display='flex' flexDirection={'column'}/>Webpeak</Td>
            <Td> </Td>
            <Td> </Td>
            <Td> </Td>
            <Td> </Td>
          </Tr>
          <Tr>
            <Td><Avatar src='' display='flex' flexDirection={'column'}/>Webpeak</Td>
            <Td> </Td>
            <Td> </Td>
            <Td> </Td>
            <Td> </Td>
          </Tr>
          <Tr>
            <Td><Avatar src='' display='flex' flexDirection={'column'}/>Webpeak</Td>
            <Td> </Td>
            <Td> </Td>
            <Td> </Td>
            <Td> </Td>
          </Tr>
          <Tr>
            <Td><Avatar src='' display='flex' flexDirection={'column'}/>Webpeak</Td>
            <Td> </Td>
            <Td> </Td>
            <Td> </Td>
            <Td> </Td>
          </Tr>
          <Tr>
            <Td><Avatar src='' display='flex' flexDirection={'column'}/>Webpeak</Td>
            <Td> </Td>
            <Td> </Td>
            <Td> </Td>
            <Td> </Td>
          </Tr>
          <Tr>
            <Td><Avatar src='' display='flex' flexDirection={'column'}/>Webpeak</Td>
            <Td> </Td>
            <Td> </Td>
            <Td> </Td>
            <Td> </Td>
          </Tr>
          <Tr>
            <Td><Avatar src='' display='flex' flexDirection={'column'}/>Webpeak</Td>
            <Td> </Td>
            <Td> </Td>
            <Td> </Td>
            <Td> </Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
          </Tr>
        </Tfoot>
      </Table>
    {/* </Box> */}
    </>
  )
}