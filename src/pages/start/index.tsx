import ButtonComponent from '@/src/components/Buttons';
import { Container, Logo, Title, SubTitle } from './styles'
import { Rules } from '@/src/components/Buttons/styles';
function Start () {

const handleNavToPlayAlone = () =>{
    console.log('teste de play alone')
}
const handleNavToPlayTogether = () =>{
    console.log('teste de play Together')
}
const handleNavToRules = () => {
  console.log('veja as regras')
}

    return ( 
        <Container>
            <Logo
            source={require("../../../assets/images/logo_dark.png")}
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
            <Rules onPress={handleNavToRules}>Ver as regras do jogo</Rules>
        </Container>
     );
}

export default Start ;