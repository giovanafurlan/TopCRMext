import { Avatar, Box, Button, Flex, Image, Link, ListItem, Table, TableCaption, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import Nav from "./components/navbar/NavBar";
import { FcApproval,FcCheckmark } from "react-icons/fc";
import { FaStar,FaStarHalfAlt,FaRegStar } from "react-icons/fa";

function Card({children}){
  return(
    <Box boxShadow='dark-lg' 
    ml={[0, 0, '10vw']} 
    mr={[0, 0, '10vw']} 
    mt={['4vw', '2vw', '1vw']} 
    mb={['4vw', '2vw', '1vw']}
    w={[490, 400, 'auto']}
    p='6' 
    rounded='md' 
    bg='gray.200'>
    {children}
    </Box>
  );
}

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
      <Flex height='600px' 
       w={[500, 500, 'auto']}
      backgroundColor={'#05071c'} 
      justifyContent='space-around'>
        <Flex w={[500, 500, 600]} 
        ml='20vw' 
        mt='100px' 
        flexDirection={'column'} 
        color={'white'} >
          <Text fontSize={{ base: '40px', md: '60px', lg: '80px' }} 
          fontWeight='bolder' 
          textTransform='uppercase' 
          lineHeight='100%'>Os 10 melhores softwares de SEO</Text>
          <Text fontSize='20px' 
          mt='2vw'>Os 10 melhores softwares de SEO</Text>
        </Flex>
        {/* <Image w='30vw' mr='10vw' ml='10vw' src='https://top10seosoftware.com/wp-content/themes/top10seo/assets/img/winner-bg.svg'/> */}
      </Flex>
    </Box>

    <Card>
      <Flex justifyContent={'space-between'}>
        <Text fontSize='20px' fontWeight={'bold'}>1º</Text>
        <Flex flexDirection={'column'} top='0'>
          <Text mb='3px' fontSize='20px' fontWeight={'bold'}>Webpeak</Text>
          <Box bg='white' h={['20vw','20vw', '6vw']}>
          <Image h='auto' mw='150px' mt='1vw' w='150px' p='15px' src="/images/webpeak.webp"/>
        </Box>
        </Flex>
        <Flex flexDirection={'column'}>
          <Link fontWeight='600'>Trusted by 110K+ users worldwide<br/>
          <Link fontWeight='600'>**14-day free trial**</Link></Link>
          <Text mt='0.5vw' display={'flex'}><FcCheckmark/>Over 200 ready-made templates</Text>
          <Text display={'flex'}><FcCheckmark/>Over 200 ready-made templates</Text>
          <Text display={'flex'}><FcCheckmark/>Over 200 ready-made templates</Text>
        </Flex>
        <Flex flexDirection={'column'} border='1px' pr='0.5vw' pl='0.5vw' textAlign={'center'}>
          <Text fontWeight={'bold'} fontSize={['30px','30px', '40px']}>9.8</Text>
          <Text>Outstanding</Text>
          <Flex pt='5px'pb='5px' ml='10px'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
          </Flex>
          <Link color='#05071c'>Read Review »</Link>
        </Flex>
        <Flex flexDirection={'column'} p={['5px','5px', '0.5vw']} m={['5px','5px', 0]}>
          <Link href='https://www.webpeak.com.br/' target='_blank'><Button  mb='20px' color='white' bg="#05071c">Visit Site</Button></Link>
          <Link textAlign='center' color='#05071c'>Start Now</Link>
        </Flex>
      </Flex>
    </Card>

    <Card>
      <Flex justifyContent={'space-between'}>
        <Text fontSize='20px' fontWeight={'bold'}>2º</Text>
        <Flex flexDirection={'column'} top='0'>
          <Text mb='3px' fontSize='20px' fontWeight={'bold'}>Semrush</Text>
          <Box bg='white' h={['20vw','20vw', '6vw']}>
          <Image h='auto' mw='150px' mt='2vw' w='150px' src="/images/semrush.webp"/>
        </Box>
        </Flex>
        <Flex flexDirection={'column'}>
          <Link fontWeight='600'>Trusted by 110K+ users worldwide<br/>
          <Link fontWeight='600'>**14-day free trial**</Link></Link>
          <Text mt='0.5vw' display={'flex'}><FcCheckmark/>Over 200 ready-made templates</Text>
          <Text display={'flex'}><FcCheckmark/>Over 200 ready-made templates</Text>
          <Text display={'flex'}><FcCheckmark/>Over 200 ready-made templates</Text>
        </Flex>
        <Flex flexDirection={'column'} border='1px' pr='0.5vw' pl='0.5vw' textAlign={'center'}>
          <Text fontWeight={'bold'} fontSize={['30px','30px', '40px']}>9.8</Text>
          <Text>Outstanding</Text>
          <Flex pt='5px'pb='5px' ml='10px'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
          </Flex>
          <Link color='#05071c'>Read Review »</Link>
        </Flex>
        <Flex flexDirection={'column'} p={['5px','5px', '0.5vw']} m={['5px','5px', 0]}>
          <Link href='https://pt.semrush.com/projects/' target='_blank'><Button  mb='20px' color='white' bg="#05071c">Visit Site</Button></Link>
          <Link textAlign='center' color='#05071c'>Start Now</Link>
        </Flex>
      </Flex>
    </Card>
    <Card>
      <Flex justifyContent={'space-between'}>
        <Text fontSize='20px' fontWeight={'bold'}>3º</Text>
        <Flex flexDirection={'column'} top='0'>
          <Text mb='3px' fontSize='20px' fontWeight={'bold'}>Ahrefs</Text>
          <Box bg='white' h={['20vw','20vw', '6vw']}>
          <Image h='auto' mw='150px' mt='-1vw' p='10px' w='150px' src="/images/ahrefs2.webp"/>
        </Box>
        </Flex>
        <Flex flexDirection={'column'}>
          <Link fontWeight='600'>Trusted by 110K+ users worldwide<br/>
          <Link fontWeight='600'>**14-day free trial**</Link></Link>
          <Text mt='0.5vw' display={'flex'}><FcCheckmark/>Over 200 ready-made templates</Text>
          <Text display={'flex'}><FcCheckmark/>Over 200 ready-made templates</Text>
          <Text display={'flex'}><FcCheckmark/>Over 200 ready-made templates</Text>
        </Flex>
        <Flex flexDirection={'column'} border='1px' pr='0.5vw' pl='0.5vw' textAlign={'center'}>
          <Text fontWeight={'bold'} fontSize={['30px','30px', '40px']}>9.8</Text>
          <Text>Outstanding</Text>
          <Flex pt='5px'pb='5px' ml='10px'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
          </Flex>
          <Link color='#05071c'>Read Review »</Link>
        </Flex>
        <Flex flexDirection={'column'} p={['5px','5px', '0.5vw']} m={['5px','5px', 0]}>
          <Link href='https://www.webpeak.com.br/' target='_blank'><Button  mb='20px' color='white' bg="#05071c">Visit Site</Button></Link>
          <Link textAlign='center' color='#05071c'>Start Now</Link>
        </Flex>
      </Flex>
    </Card>
    <Card>
      <Flex justifyContent={'space-between'}>
        <Text fontSize='20px' fontWeight={'bold'}>4º</Text>
        <Flex flexDirection={'column'} top='0'>
          <Text mb='3px' fontSize='20px' fontWeight={'bold'}>Serpstat</Text>
          <Box bg='white' h={['20vw','20vw', '6vw']}>
          <Image h='6vw' mw='150px' w='150px' p='1px' src="/images/serpstat.webp"/>
        </Box>
        </Flex>
        <Flex flexDirection={'column'}>
          <Link fontWeight='600'>Trusted by 110K+ users worldwide<br/>
          <Link fontWeight='600'>**14-day free trial**</Link></Link>
          <Text mt='0.5vw' display={'flex'}><FcCheckmark/>Over 200 ready-made templates</Text>
          <Text display={'flex'}><FcCheckmark/>Over 200 ready-made templates</Text>
          <Text display={'flex'}><FcCheckmark/>Over 200 ready-made templates</Text>
        </Flex>
        <Flex flexDirection={'column'} border='1px' pr='0.5vw' pl='0.5vw' textAlign={'center'}>
          <Text fontWeight={'bold'} fontSize={['30px','30px', '40px']}>9.8</Text>
          <Text>Outstanding</Text>
          <Flex pt='5px'pb='5px' ml='10px'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
          </Flex>
          <Link color='#05071c'>Read Review »</Link>
        </Flex>
        <Flex flexDirection={'column'} p={['5px','5px', '0.5vw']} m={['5px','5px', 0]}>
          <Link href='https://www.webpeak.com.br/' target='_blank'><Button  mb='20px' color='white' bg="#05071c">Visit Site</Button></Link>
          <Link textAlign='center' color='#05071c'>Start Now</Link>
        </Flex>
      </Flex>
    </Card>
    <Card>
      <Flex justifyContent={'space-between'}>
        <Text fontSize='20px' fontWeight={'bold'}>5º</Text>
        <Flex flexDirection={'column'} top='0'>
          <Text mb='3px' fontSize='20px' fontWeight={'bold'}>Rankingcoach</Text>
          <Box bg='white' h={['20vw','20vw', '6vw']}>
          <Image h='auto' mw='150px' mt='1vw' w='150px' p='5px' src="/images/rankingcoach2.webp"/>
        </Box>
        </Flex>
        <Flex flexDirection={'column'}>
          <Link fontWeight='600'>Trusted by 110K+ users worldwide<br/>
          <Link fontWeight='600'>**14-day free trial**</Link></Link>
          <Text mt='0.5vw' display={'flex'}><FcCheckmark/>Over 200 ready-made templates</Text>
          <Text display={'flex'}><FcCheckmark/>Over 200 ready-made templates</Text>
          <Text display={'flex'}><FcCheckmark/>Over 200 ready-made templates</Text>
        </Flex>
        <Flex flexDirection={'column'} border='1px' pr='0.5vw' pl='0.5vw' textAlign={'center'}>
          <Text fontWeight={'bold'} fontSize={['30px','30px', '40px']}>9.8</Text>
          <Text>Outstanding</Text>
          <Flex pt='5px'pb='5px' ml='10px'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
          </Flex>
          <Link color='#05071c'>Read Review »</Link>
        </Flex>
        <Flex flexDirection={'column'} p={['5px','5px', '0.5vw']} m={['5px','5px', 0]}>
          <Link href='https://www.webpeak.com.br/' target='_blank'><Button  mb='20px' color='white' bg="#05071c">Visit Site</Button></Link>
          <Link textAlign='center' color='#05071c'>Start Now</Link>
        </Flex>
      </Flex>
    </Card>
    <Card>
      <Flex justifyContent={'space-between'}>
        <Text fontSize='20px' fontWeight={'bold'}>6º</Text>
        <Flex flexDirection={'column'} top='0'>
          <Text mb='3px' fontSize='20px' fontWeight={'bold'}>Se ranking</Text>
          <Box bg='white' h={['20vw','20vw', '6vw']}>
          <Image h='auto' mw='150px' mt='0.8vw' w='150px' src="/images/se ranking2.webp"/>
        </Box>
        </Flex>
        <Flex flexDirection={'column'}>
          <Link fontWeight='600'>Trusted by 110K+ users worldwide<br/>
          <Link fontWeight='600'>**14-day free trial**</Link></Link>
          <Text mt='0.5vw' display={'flex'}><FcCheckmark/>Over 200 ready-made templates</Text>
          <Text display={'flex'}><FcCheckmark/>Over 200 ready-made templates</Text>
          <Text display={'flex'}><FcCheckmark/>Over 200 ready-made templates</Text>
        </Flex>
        <Flex flexDirection={'column'} border='1px' pr='0.5vw' pl='0.5vw' textAlign={'center'}>
          <Text fontWeight={'bold'} fontSize={['30px','30px', '40px']}>9.8</Text>
          <Text>Outstanding</Text>
          <Flex pt='5px'pb='5px' ml='10px'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
          </Flex>
          <Link color='#05071c'>Read Review »</Link>
        </Flex>
        <Flex flexDirection={'column'} p={['5px','5px', '0.5vw']} m={['5px','5px', 0]}>
          <Link href='https://www.webpeak.com.br/' target='_blank'><Button  mb='20px' color='white' bg="#05071c">Visit Site</Button></Link>
          <Link textAlign='center' color='#05071c'>Start Now</Link>
        </Flex>
      </Flex>
    </Card>
    <Card>
      <Flex justifyContent={'space-between'}>
        <Text fontSize='20px' fontWeight={'bold'}>7º</Text>
        <Flex flexDirection={'column'} top='0'>
          <Text mb='3px' fontSize='20px' fontWeight={'bold'}>Moz</Text>
          <Box bg='white' h={['20vw','20vw', '6vw']}>
          <Image h='auto' mw='150px' mt='1vw' w='150px' p='15px' src="/images/moz.webp"/>
        </Box>
        </Flex>
        <Flex flexDirection={'column'}>
          <Link fontWeight='600'>Trusted by 110K+ users worldwide<br/>
          <Link fontWeight='600'>**14-day free trial**</Link></Link>
          <Text mt='0.5vw' display={'flex'}><FcCheckmark/>Over 200 ready-made templates</Text>
          <Text display={'flex'}><FcCheckmark/>Over 200 ready-made templates</Text>
          <Text display={'flex'}><FcCheckmark/>Over 200 ready-made templates</Text>
        </Flex>
        <Flex flexDirection={'column'} border='1px' pr='0.5vw' pl='0.5vw' textAlign={'center'}>
          <Text fontWeight={'bold'} fontSize={['30px','30px', '40px']}>9.8</Text>
          <Text>Outstanding</Text>
          <Flex pt='5px'pb='5px' ml='10px'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
          </Flex>
          <Link color='#05071c'>Read Review »</Link>
        </Flex>
        <Flex flexDirection={'column'} p={['5px','5px', '0.5vw']} m={['5px','5px', 0]}>
          <Link href='https://www.webpeak.com.br/' target='_blank'><Button  mb='20px' color='white' bg="#05071c">Visit Site</Button></Link>
          <Link textAlign='center' color='#05071c'>Start Now</Link>
        </Flex>
      </Flex>
    </Card>
    <Card>
      <Flex justifyContent={'space-between'}>
        <Text fontSize='20px' fontWeight={'bold'}>8º</Text>
        <Flex flexDirection={'column'} top='0'>
          <Text mb='3px' fontSize='20px' fontWeight={'bold'}>Ubersugest</Text>
          <Box bg='white' h={['20vw','20vw', '6vw']}>
          <Image h='auto' mw='150px' mt='1vw' w='150px' src="/images/ubersugest.webp"/>
        </Box>
        </Flex>
        <Flex flexDirection={'column'}>
          <Link fontWeight='600'>Trusted by 110K+ users worldwide<br/>
          <Link fontWeight='600'>**14-day free trial**</Link></Link>
          <Text mt='0.5vw' display={'flex'}><FcCheckmark/>Over 200 ready-made templates</Text>
          <Text display={'flex'}><FcCheckmark/>Over 200 ready-made templates</Text>
          <Text display={'flex'}><FcCheckmark/>Over 200 ready-made templates</Text>
        </Flex>
        <Flex flexDirection={'column'} border='1px' pr='0.5vw' pl='0.5vw' textAlign={'center'}>
          <Text fontWeight={'bold'} fontSize={['30px','30px', '40px']}>9.8</Text>
          <Text>Outstanding</Text>
          <Flex pt='5px'pb='5px' ml='10px'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
          </Flex>
          <Link color='#05071c'>Read Review »</Link>
        </Flex>
        <Flex flexDirection={'column'} p={['5px','5px', '0.5vw']} m={['5px','5px', 0]}>
          <Link href='https://www.webpeak.com.br/' target='_blank'><Button  mb='20px' color='white' bg="#05071c">Visit Site</Button></Link>
          <Link textAlign='center' color='#05071c'>Start Now</Link>
        </Flex>
      </Flex>
    </Card>
    <Card>
      <Flex justifyContent={'space-between'}>
        <Text fontSize='20px' fontWeight={'bold'}>9º</Text>
        <Flex flexDirection={'column'} top='0'>
          <Text mb='3px' fontSize='20px' fontWeight={'bold'}>Webpeak</Text>
          <Box bg='white' h={['20vw','20vw', '6vw']}>
          <Image h='auto' mw='150px' mt='1vw' w='150px' p='15px' src="/images/logocor.webp"/>
        </Box>
        </Flex>
        <Flex flexDirection={'column'}>
          <Link fontWeight='600'>Trusted by 110K+ users worldwide<br/>
          <Link fontWeight='600'>**14-day free trial**</Link></Link>
          <Text mt='0.5vw' display={'flex'}><FcCheckmark/>Over 200 ready-made templates</Text>
          <Text display={'flex'}><FcCheckmark/>Over 200 ready-made templates</Text>
          <Text display={'flex'}><FcCheckmark/>Over 200 ready-made templates</Text>
        </Flex>
        <Flex flexDirection={'column'} border='1px' pr='0.5vw' pl='0.5vw' textAlign={'center'}>
          <Text fontWeight={'bold'} fontSize={['30px','30px', '40px']}>9.8</Text>
          <Text>Outstanding</Text>
          <Flex pt='5px'pb='5px' ml='10px'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
          </Flex>
          <Link color='#05071c'>Read Review »</Link>
        </Flex>
        <Flex flexDirection={'column'} p={['5px','5px', '0.5vw']} m={['5px','5px', 0]}>
          <Link href='https://www.webpeak.com.br/' target='_blank'><Button  mb='20px' color='white' bg="#05071c">Visit Site</Button></Link>
          <Link textAlign='center' color='#05071c'>Start Now</Link>
        </Flex>
      </Flex>
    </Card>
    <Card>
      <Flex justifyContent={'space-between'}>
        <Text fontSize='20px' fontWeight={'bold'}>10º</Text>
        <Flex flexDirection={'column'} top='0'>
          <Text mb='3px' fontSize='20px' fontWeight={'bold'}>Webpeak</Text>
          <Box bg='white' h={['20vw','20vw', '6vw']}>
          <Image h='auto' mw='150px' mt='1vw' w='150px' p='15px' src="/images/logocor.webp"/>
        </Box>
        </Flex>
        <Flex flexDirection={'column'}>
          <Link fontWeight='600'>Trusted by 110K+ users worldwide<br/>
          <Link fontWeight='600'>**14-day free trial**</Link></Link>
          <Text mt='0.5vw' display={'flex'}><FcCheckmark/>Over 200 ready-made templates</Text>
          <Text display={'flex'}><FcCheckmark/>Over 200 ready-made templates</Text>
          <Text display={'flex'}><FcCheckmark/>Over 200 ready-made templates</Text>
        </Flex>
        <Flex flexDirection={'column'} border='1px' pr='0.5vw' pl='0.5vw' textAlign={'center'}>
          <Text fontWeight={'bold'} fontSize={['30px','30px', '40px']}>9.8</Text>
          <Text>Outstanding</Text>
          <Flex pt='5px'pb='5px' ml='10px'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
          </Flex>
          <Link color='#05071c'>Read Review »</Link>
        </Flex>
        <Flex flexDirection={'column'} p={['5px','5px', '0.5vw']} m={['5px','5px', 0]}>
          <Link href='https://www.webpeak.com.br/' target='_blank'><Button  mb='20px' color='white' bg="#05071c">Visit Site</Button></Link>
          <Link textAlign='center' color='#05071c'>Start Now</Link>
        </Flex>
      </Flex>
    </Card>
    

    {/* <Box display={'flex'} justifyContent={'center'} mt='5vw' m='2vw' flexDirection={'column'}> */}
      {/* <Table size='lg'border='1px' w='500' h='800' display={'block'} overflow='scroll' m='2vw'>
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
      </Table> */}
    {/* </Box> */}
    </>
  )
}