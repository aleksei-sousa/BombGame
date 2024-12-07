import { Container, Title, Logo, SucessImg } from "./styles/Disarmed.styles";
import logoImg from '../assets/images/logo_dark.png'
import SucessPng from '../assets/images/Michael_happy.png'
import ButtonComponent from "@/src/components/Buttons";
import { router } from 'expo-router'

function Disarmed () {

  const handleNavToStart = () => {
    router.replace('/')
  }
    return ( 
        <Container>
          <Logo source={logoImg} style={{resizeMode: "contain"}} />
          <Title>Parabèns !!! {"\n"} Você desarmou </Title>
          <SucessImg source={SucessPng} style={{resizeMode: "contain"}} />
          <ButtonComponent
            buttonText={'Página Inicial'}
            handlePress={handleNavToStart}
          />
        </Container>
     );
}

export default Disarmed ;