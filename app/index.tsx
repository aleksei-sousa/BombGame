import ButtonComponent from '@/src/components/Buttons';
import { Container, Logo, Title, SubTitle } from './styles/Start.styles'
import { Rules } from './styles/Start.styles';
import { Link } from 'expo-router';
import { router } from 'expo-router';


function Start () {

const handleNavToPlayAlone = () =>{
    router.push('/PlayAlone')
}
const handleNavToPlayTogether = () =>{
  router.push('/PlayTogether')
}
const handleNavToRules = () => {
  console.log('veja as regras')
}

    return ( 
        <Container>
            <Logo
            source={require("../assets/images/logo_dark.png")}
            />
            <Title>Bem vindo ao {"\n"} Bomb Game</Title>
            <SubTitle>Escolha um modo de jogo.</SubTitle>
            <ButtonComponent
              buttonText={"Jogar solo"}
              handlePress={handleNavToPlayAlone}
            />

            <ButtonComponent
              buttonText={"Jogar em dupla"}
              handlePress={handleNavToPlayTogether}
            />

              <Rules onPress={handleNavToRules}>
                <Link href="/Rules">Ver as regras do jogo</Link>
              </Rules>

        </Container>
     );
}

export default Start ;