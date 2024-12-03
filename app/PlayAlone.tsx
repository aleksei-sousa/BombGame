import { ImageBackground } from 'react-native';
import { Title, Container, Timer, TextTimer, TipContainer, TipText, TipTitle } from './styles/PlayAlone.styles';
import bombImg from '../assets/images/Bomba.png'; // Importação correta
import PasswordInput from '@/src/components/PasswodInput/PasswordInput';
import ButtonComponent from '@/src/components/Buttons/index';
import { router } from 'expo-router';


function PlayAlone() {

    const handleStartGame = () => {
        alert("Jogo Iniciado !")
    }

    const handleNavToStartGame = () => {
        router.back();
    }

    return ( 
        <Container>
            <Title>
                BomB Game Solo
            </Title>
            <ImageBackground
                source={bombImg} 
                resizeMode='cover'
                style={{
                    width: '100%',
                    minHeight: 130,
                    marginTop: 50,
                    alignItems: 'center'
                }}
            >
            <Timer>
                <TextTimer>
                    00 : 00 : 00
                </TextTimer>
            </Timer>
            </ImageBackground>
            <TipContainer>
                <TipTitle>
                    Sua dica:
                </TipTitle>
                <TipText>
                    A dica vai aparecer bem aqui !
                </TipText>
            </TipContainer>

            <PasswordInput/>
            <ButtonComponent buttonText="Iniciar" handlePress={handleStartGame}/>
            <ButtonComponent buttonText="Página Inicial" handlePress={handleNavToStartGame}/>

        </Container>
    );
}

export default PlayAlone;
