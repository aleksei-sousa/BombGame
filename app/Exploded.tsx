import { Container, Logo, Title, SucessImg, } from './styles/Exploded.styles'
import ButtonComponent from '@/src/components/Buttons';
import FailurePng from '../assets/images/Michael_furious.png'
import { router } from 'expo-router'
import logoImg from '../assets/images/logo_ligth.png'


function Exploded () {

    const handleNavToStart = () => {
        router.replace('/')
    }

    return ( 
        <Container>
        <Logo source={logoImg} style={{resizeMode: "contain"}} />
        <Title>Você fracassou, a bomba expludiu </Title>
        <SucessImg source={FailurePng} style={{resizeMode: "contain"}} />
        <ButtonComponent
          buttonText={'Página Inicial'}
          handlePress={handleNavToStart}
        />
      </Container>
     );
}

export default Exploded ;