import { Container, Title, Logo, SucessImg } from "./styles/Disarmed.styles";
import logoImg from '../assets/images/logo_dark.png'
import SucessPng from '../assets/images/Michael_happy.png'

function Disarmed () {
    return ( 
        <Container>
          <Logo source={logoImg} style={{resizeMode: "contain"}} />
          <Title>Parabèns !!! {"/n"} Você desarmou </Title>
          <SucessImg source={SucessPng} style={{resizeMode: "contain"}} />
        </Container>
     );
}

export default Disarmed ;