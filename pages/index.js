import { Avatar, Box, Button, Flex, Image, Link, ListItem, Table, TableCaption, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import Nav from "./components/navbar/NavBar";
import { FcCheckmark,FcCancel } from "react-icons/fc";
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

  const primeiro = {
    position: "1º",
    nome: "Zoho", 
    logo: "/images/zoho.webp",
    info1: "",
    info2: "",
    info3: "",
    score: "9.8",
    rating: "Outstanding",
    review: "",
    website: ""
  }

  const segundo = {
    position: "2º",
    nome: "", 
    logo: "/images/",
    info1: "",
    info2: "",
    info3: "",
    score: "",
    rating: "",
    review: "",
    website: ""
  }

  const terceiro = {
    position: "3º",
    nome: "", 
    logo: "/images/",
    info1: "",
    info2: "",
    info3: "",
    score: "",
    rating: "",
    review: "",
    website: ""
  }

  const quarto = {
    position: "4º",
    nome: "", 
    logo: "/images/",
    info1: "",
    info2: "",
    info3: "",
    score: "",
    rating: "",
    review: "",
    website: ""
  }

  const quinto = {
    position: "5º",
    nome: "", 
    logo: "/images/",
    info1: "",
    info2: "",
    info3: "",
    score: "",
    rating: "",
    review: "",
    website: ""
  }

  const sexto = {
    position: "6º",
    nome: "", 
    logo: "/images/",
    info1: "",
    info2: "",
    info3: "",
    score: "",
    rating: "",
    review: "",
    website: ""
  }

  const setimo = {
    position: "7º",
    nome: "", 
    logo: "/images/",
    info1: "",
    info2: "",
    info3: "",
    score: "",
    rating: "",
    review: "",
    website: ""
  }

  const oitavo = {
    position: "8º",
    nome: "", 
    logo: "/images/",
    info1: "",
    info2: "",
    info3: "",
    score: "",
    rating: "",
    review: "",
    website: ""
  }

  const nono = {
    position: "9º",
    nome: "", 
    logo: "/images/",
    info1: "",
    info2: "",
    info3: "",
    score: "",
    rating: "",
    review: "",
    website: ""
  }

  const decimo = {
    position: "10º",
    nome: "", 
    logo: "/images/",
    info1: "",
    info2: "",
    info3: "",
    score: "",
    rating: "",
    review: "",
    website: ""
  }

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
          lineHeight='100%'>Os 10 melhores CRM</Text>
          <Text fontSize='20px' 
          mt='2vw'>Os 10 melhores CRM</Text>
        </Flex>
        {/* <Image w='30vw' mr='10vw' ml='10vw' src='https://top10seosoftware.com/wp-content/themes/top10seo/assets/img/winner-bg.svg'/> */}
      </Flex>
    </Box>

    <Card>
      <Flex justifyContent={'space-between'}>
        <Text fontSize='20px' fontWeight={'bold'}>{primeiro.position}</Text>
        <Flex flexDirection={'column'} top='0'>
          <Text mb='3px' fontSize='20px' fontWeight={'bold'}>{primeiro.nome}</Text>
          <Box bg='white' h={['20vw','20vw', '6vw']}>
          <Image h='auto' mw='150px' mt='1vw' w='150px' p='15px' src={primeiro.logo}/>
        </Box>
        </Flex>
        <Flex flexDirection={'column'}>
          <Link fontWeight='600'>Trusted by 110K+ users worldwide<br/>
          <Link fontWeight='600'>**14-day free trial**</Link></Link>
          <Text mt='0.5vw' display={'flex'}><FcCheckmark/>{primeiro.info1}</Text>
          <Text display={'flex'}><FcCheckmark/>{primeiro.info2}</Text>
          <Text display={'flex'}><FcCheckmark/>{primeiro.info3}</Text>
        </Flex>
        <Flex flexDirection={'column'} border='1px' pr='0.5vw' pl='0.5vw' textAlign={'center'}>
          <Text fontWeight={'bold'} fontSize={['30px','30px', '40px']}>{primeiro.score}</Text>
          <Text>{primeiro.rating}</Text>
          <Flex pt='5px'pb='5px' ml='10px'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
          </Flex>
          <Link target="_blank" href={primeiro.review} color='#05071c'><Text>Read Review »</Text></Link>
        </Flex>
        <Flex flexDirection={'column'} p={['5px','5px', '0.5vw']} m={['5px','5px', 0]}>
          <Link href={primeiro.website} target='_blank'><Button  mb='20px' color='white' bg="#05071c">Visit Site</Button></Link>
          {/* <Link textAlign='center' color='#05071c'>Start Now</Link> */}
        </Flex>
      </Flex>
    </Card>

    <Card>
      <Flex justifyContent={'space-between'}>
        <Text fontSize='20px' fontWeight={'bold'}>{segundo.position}</Text>
        <Flex flexDirection={'column'} top='0'>
          <Text mb='3px' fontSize='20px' fontWeight={'bold'}>{segundo.nome}</Text>
          <Box bg='white' h={['20vw','20vw', '6vw']}>
          <Image h='auto' mw='150px' mt='2vw' w='150px' src={segundo.logo}/>
        </Box>
        </Flex>
        <Flex flexDirection={'column'}>
          <Link fontWeight='600'>Trusted by 110K+ users worldwide<br/>
          <Link fontWeight='600'>**14-day free trial**</Link></Link>
          <Text mt='0.5vw' display={'flex'}><FcCheckmark/>{segundo.info1}</Text>
          <Text display={'flex'}><FcCheckmark/>{segundo.info2}</Text>
          <Text display={'flex'}><FcCheckmark/>{segundo.info3}</Text>
        </Flex>
        <Flex flexDirection={'column'} border='1px' pr='0.5vw' pl='0.5vw' textAlign={'center'}>
          <Text fontWeight={'bold'} fontSize={['30px','30px', '40px']}>{segundo.score}</Text>
          <Text>{segundo.rating}</Text>
          <Flex pt='5px'pb='5px' ml='10px'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
          </Flex>
          <Link target="_blank" href={segundo.review} color='#05071c'><Text>Read Review »</Text></Link>
        </Flex>
        <Flex flexDirection={'column'} p={['5px','5px', '0.5vw']} m={['5px','5px', 0]}>
          <Link href={segundo.website} target='_blank'><Button  mb='20px' color='white' bg="#05071c">Visit Site</Button></Link>
          {/* <Link textAlign='center' color='#05071c'>Start Now</Link> */}
        </Flex>
      </Flex>
    </Card>

    <Card>
      <Flex justifyContent={'space-between'}>
        <Text fontSize='20px' fontWeight={'bold'}>{terceiro.position}</Text>
        <Flex flexDirection={'column'} top='0'>
          <Text mb='3px' fontSize='20px' fontWeight={'bold'}>{terceiro.nome}</Text>
          <Box bg='white' h={['20vw','20vw', '6vw']}>
          <Image h='auto' mw='150px' mt='-1vw' w='150px' p='15px' src={terceiro.logo}/>
        </Box>
        </Flex>
        <Flex flexDirection={'column'}>
          <Link fontWeight='600'>Trusted by 110K+ users worldwide<br/>
          <Link fontWeight='600'>**14-day free trial**</Link></Link>
          <Text mt='0.5vw' display={'flex'}><FcCheckmark/>{terceiro.info1}</Text>
          <Text display={'flex'}><FcCheckmark/>{terceiro.info2}</Text>
          <Text display={'flex'}><FcCheckmark/>{terceiro.info3}</Text>
        </Flex>
        <Flex flexDirection={'column'} border='1px' pr='0.5vw' pl='0.5vw' textAlign={'center'}>
          <Text fontWeight={'bold'} fontSize={['30px','30px', '40px']}>{terceiro.score}</Text>
          <Text>{terceiro.rating}</Text>
          <Flex pt='5px'pb='5px' ml='10px'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
          </Flex>
          <Link target="_blank" href={terceiro.review} color='#05071c'><Text>Read Review »</Text></Link>
        </Flex>
        <Flex flexDirection={'column'} p={['5px','5px', '0.5vw']} m={['5px','5px', 0]}>
          <Link href={terceiro.website} target='_blank'><Button  mb='20px' color='white' bg="#05071c">Visit Site</Button></Link>
          {/* <Link textAlign='center' color='#05071c'>Start Now</Link> */}
        </Flex>
      </Flex>
    </Card>

    <Card>
      <Flex justifyContent={'space-between'}>
        <Text fontSize='20px' fontWeight={'bold'}>{quarto.position}</Text>
        <Flex flexDirection={'column'} top='0'>
          <Text mb='3px' fontSize='20px' fontWeight={'bold'}>{quarto.nome}</Text>
          <Box bg='white' h={['20vw','20vw', '6vw']}>
          <Image h='auto' mw='150px' mt='1vw' w='150px' src={quarto.logo}/>
        </Box>
        </Flex>
        <Flex flexDirection={'column'}>
          <Link fontWeight='600'>Trusted by 110K+ users worldwide<br/>
          <Link fontWeight='600'>**14-day free trial**</Link></Link>
          <Text mt='0.5vw' display={'flex'}><FcCheckmark/>{quarto.info1}</Text>
          <Text display={'flex'}><FcCheckmark/>{quarto.info2}</Text>
          <Text display={'flex'}><FcCheckmark/>{quarto.info3}</Text>
        </Flex>
        <Flex flexDirection={'column'} border='1px' pr='0.5vw' pl='0.5vw' textAlign={'center'}>
          <Text fontWeight={'bold'} fontSize={['30px','30px', '40px']}>{quarto.score}</Text>
          <Text>{quarto.rating}</Text>
          <Flex pt='5px'pb='5px' ml='10px'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
          </Flex>
          <Link target="_blank" href={quarto.review} color='#05071c'><Text>Read Review »</Text></Link>
        </Flex>
        <Flex flexDirection={'column'} p={['5px','5px', '0.5vw']} m={['5px','5px', 0]}>
          <Link href={quarto.website} target='_blank'><Button  mb='20px' color='white' bg="#05071c">Visit Site</Button></Link>
          {/* <Link textAlign='center' color='#05071c'>Start Now</Link> */}
        </Flex>
      </Flex>
    </Card>

    <Card>
      <Flex justifyContent={'space-between'}>
        <Text fontSize='20px' fontWeight={'bold'}>{quinto.position}</Text>
        <Flex flexDirection={'column'} top='0'>
          <Text mb='3px' fontSize='20px' fontWeight={'bold'}>{quinto.nome}</Text>
          <Box bg='white' h={['20vw','20vw', '6vw']}>
          <Image h='auto' mw='150px' mt='1vw' w='150px' p='8px' src={quinto.logo}/>
        </Box>
        </Flex>
        <Flex flexDirection={'column'}>
          <Link fontWeight='600'>Trusted by 110K+ users worldwide<br/>
          <Link fontWeight='600'>**14-day free trial**</Link></Link>
          <Text mt='0.5vw' display={'flex'}><FcCheckmark/>{quinto.info1}</Text>
          <Text display={'flex'}><FcCheckmark/>{quinto.info2}</Text>
          <Text display={'flex'}><FcCheckmark/>{quinto.info3}</Text>
        </Flex>
        <Flex flexDirection={'column'} border='1px' pr='0.5vw' pl='0.5vw' textAlign={'center'}>
          <Text fontWeight={'bold'} fontSize={['30px','30px', '40px']}>{quinto.score}</Text>
          <Text>{quinto.rating}</Text>
          <Flex pt='5px'pb='5px' ml='10px'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
          </Flex>
          <Link target="_blank" href={quinto.review} color='#05071c'><Text>Read Review »</Text></Link>
        </Flex>
        <Flex flexDirection={'column'} p={['5px','5px', '0.5vw']} m={['5px','5px', 0]}>
          <Link href={quinto.website} target='_blank'><Button  mb='20px' color='white' bg="#05071c">Visit Site</Button></Link>
          {/* <Link textAlign='center' color='#05071c'>Start Now</Link> */}
        </Flex>
      </Flex>
    </Card>

    <Card>
      <Flex justifyContent={'space-between'}>
        <Text fontSize='20px' fontWeight={'bold'}>{sexto.position}</Text>
        <Flex flexDirection={'column'} top='0'>
          <Text mb='3px' fontSize='20px' fontWeight={'bold'}>{sexto.nome}</Text>
          <Box bg='white' h={['20vw','20vw', '6vw']}>
          <Image h='auto' mw='150px' mt='1vw' w='150px' src={sexto.logo}/>
        </Box>
        </Flex>
        <Flex flexDirection={'column'}>
          <Link fontWeight='600'>Trusted by 110K+ users worldwide<br/>
          <Link fontWeight='600'>**14-day free trial**</Link></Link>
          <Text mt='0.5vw' display={'flex'}><FcCheckmark/>{sexto.info1}</Text>
          <Text display={'flex'}><FcCheckmark/>{sexto.info2}</Text>
          <Text display={'flex'}><FcCheckmark/>{sexto.info3}</Text>
        </Flex>
        <Flex flexDirection={'column'} border='1px' pr='0.5vw' pl='0.5vw' textAlign={'center'}>
          <Text fontWeight={'bold'} fontSize={['30px','30px', '40px']}>{sexto.score}</Text>
          <Text>{sexto.rating}</Text>
          <Flex pt='5px'pb='5px' ml='10px'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
          </Flex>
          <Link target="_blank" href={sexto.review} color='#05071c'><Text>Read Review »</Text></Link>
        </Flex>
        <Flex flexDirection={'column'} p={['5px','5px', '0.5vw']} m={['5px','5px', 0]}>
          <Link href={sexto.website} target='_blank'><Button  mb='20px' color='white' bg="#05071c">Visit Site</Button></Link>
          {/* <Link textAlign='center' color='#05071c'>Start Now</Link> */}
        </Flex>
      </Flex>
    </Card>

    <Card>
      <Flex justifyContent={'space-between'}>
        <Text fontSize='20px' fontWeight={'bold'}>{setimo.position}</Text>
        <Flex flexDirection={'column'} top='0'>
          <Text mb='3px' fontSize='20px' fontWeight={'bold'}>{setimo.nome}</Text>
          <Box bg='white' h={['20vw','20vw', '6vw']}>
          <Image h='auto' mw='150px' mt='1vw' w='150px' p='15px' src={setimo.logo}/>
        </Box>
        </Flex>
        <Flex flexDirection={'column'}>
          <Link fontWeight='600'>Trusted by 110K+ users worldwide<br/>
          <Link fontWeight='600'>**14-day free trial**</Link></Link>
          <Text mt='0.5vw' display={'flex'}><FcCheckmark/>{primeiro.info1}</Text>
          <Text display={'flex'}><FcCheckmark/>{setimo.info2}</Text>
          <Text display={'flex'}><FcCheckmark/>{setimo.info3}</Text>
        </Flex>
        <Flex flexDirection={'column'} border='1px' pr='0.5vw' pl='0.5vw' textAlign={'center'}>
          <Text fontWeight={'bold'} fontSize={['30px','30px', '40px']}>{setimo.score}</Text>
          <Text>{setimo.rating}</Text>
          <Flex pt='5px'pb='5px' ml='10px'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
          </Flex>
          <Link target="_blank" href={setimo.review} color='#05071c'><Text>Read Review »</Text></Link>
        </Flex>
        <Flex flexDirection={'column'} p={['5px','5px', '0.5vw']} m={['5px','5px', 0]}>
          <Link href={setimo.website} target='_blank'><Button  mb='20px' color='white' bg="#05071c">Visit Site</Button></Link>
          {/* <Link textAlign='center' color='#05071c'>Start Now</Link> */}
        </Flex>
      </Flex>
    </Card>

    <Card>
      <Flex justifyContent={'space-between'}>
        <Text fontSize='20px' fontWeight={'bold'}>{oitavo.position}</Text>
        <Flex flexDirection={'column'} top='0'>
          <Text mb='3px' fontSize='20px' fontWeight={'bold'}>{oitavo.nome}</Text>
          <Box bg='white' h={['20vw','20vw', '6vw']}>
          <Image h='auto' mw='150px' mt='1vw' w='150px' src={oitavo.logo}/>
        </Box>
        </Flex>
        <Flex flexDirection={'column'}>
          <Link fontWeight='600'>Trusted by 110K+ users worldwide<br/>
          <Link fontWeight='600'>**14-day free trial**</Link></Link>
          <Text mt='0.5vw' display={'flex'}><FcCheckmark/>{oitavo.info1}</Text>
          <Text display={'flex'}><FcCheckmark/>{oitavo.info2}</Text>
          <Text display={'flex'}><FcCheckmark/>{primeiro.info3}</Text>
        </Flex>
        <Flex flexDirection={'column'} border='1px' pr='0.5vw' pl='0.5vw' textAlign={'center'}>
          <Text fontWeight={'bold'} fontSize={['30px','30px', '40px']}>{oitavo.score}</Text>
          <Text>{oitavo.rating}</Text>
          <Flex pt='5px'pb='5px' ml='10px'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
          </Flex>
          <Link target="_blank" href={oitavo.review} color='#05071c'><Text>Read Review »</Text></Link>
        </Flex>
        <Flex flexDirection={'column'} p={['5px','5px', '0.5vw']} m={['5px','5px', 0]}>
          <Link href={oitavo.website} target='_blank'><Button  mb='20px' color='white' bg="#05071c">Visit Site</Button></Link>
          {/* <Link textAlign='center' color='#05071c'>Start Now</Link> */}
        </Flex>
      </Flex>
    </Card>

    <Card>
      <Flex justifyContent={'space-between'}>
        <Text fontSize='20px' fontWeight={'bold'}>{nono.position}</Text>
        <Flex flexDirection={'column'} top='0'>
          <Text mb='3px' fontSize='20px' fontWeight={'bold'}>{nono.nome}</Text>
          <Box bg='white' h={['20vw','20vw', '6vw']}>
          <Image h='auto' mw='150px' mt='1vw' w='150px' p='15px' src={nono.logo}/>
        </Box>
        </Flex>
        <Flex flexDirection={'column'}>
          <Link fontWeight='600'>Trusted by 110K+ users worldwide<br/>
          <Link fontWeight='600'>**14-day free trial**</Link></Link>
          <Text mt='0.5vw' display={'flex'}><FcCheckmark/>{nono.info1}</Text>
          <Text display={'flex'}><FcCheckmark/>{nono.info2}</Text>
          <Text display={'flex'}><FcCheckmark/>{nono.info3}</Text>
        </Flex>
        <Flex flexDirection={'column'} border='1px' pr='0.5vw' pl='0.5vw' textAlign={'center'}>
          <Text fontWeight={'bold'} fontSize={['30px','30px', '40px']}>{nono.score}</Text>
          <Text>{nono.rating}</Text>
          <Flex pt='5px'pb='5px' ml='10px'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
          </Flex>
          <Link target="_blank" href={nono.review} color='#05071c'><Text>Read Review »</Text></Link>
        </Flex>
        <Flex flexDirection={'column'} p={['5px','5px', '0.5vw']} m={['5px','5px', 0]}>
          <Link href={nono.website} target='_blank'><Button  mb='20px' color='white' bg="#05071c">Visit Site</Button></Link>
          {/* <Link textAlign='center' color='#05071c'>Start Now</Link> */}
        </Flex>
      </Flex>
    </Card>

    <Card>
      <Flex justifyContent={'space-between'}>
        <Text fontSize='20px' fontWeight={'bold'}>{decimo.position}</Text>
        <Flex flexDirection={'column'} top='0'>
          <Text mb='3px' fontSize='20px' fontWeight={'bold'}>{decimo.nome}</Text>
          <Box bg='white' h={['20vw','20vw', '6vw']}>
          <Image h='auto' mw='150px' mt='1vw' w='150px' p='15px' src={decimo.logo}/>
        </Box>
        </Flex>
        <Flex flexDirection={'column'}>
          <Link fontWeight='600'>Trusted by 110K+ users worldwide<br/>
          <Link fontWeight='600'>**14-day free trial**</Link></Link>
          <Text mt='0.5vw' display={'flex'}><FcCheckmark/>{decimo.info1}</Text>
          <Text display={'flex'}><FcCheckmark/>{decimo.info2}</Text>
          <Text display={'flex'}><FcCheckmark/>{decimo.info3}</Text>
        </Flex>
        <Flex flexDirection={'column'} border='1px' pr='0.5vw' pl='0.5vw' textAlign={'center'}>
          <Text fontWeight={'bold'} fontSize={['30px','30px', '40px']}>{decimo.score}</Text>
          <Text>{decimo.rating}</Text>
          <Flex pt='5px'pb='5px' ml='10px'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
          </Flex>
          <Link target="_blank" href={decimo.review} color='#05071c'><Text>Read Review »</Text></Link>
        </Flex>
        <Flex flexDirection={'column'} p={['5px','5px', '0.5vw']} m={['5px','5px', 0]}>
          <Link href={decimo.website} target='_blank'><Button  mb='20px' color='white' bg="#05071c">Visit Site</Button></Link>
          {/* <Link textAlign='center' color='#05071c'>Start Now</Link> */}
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