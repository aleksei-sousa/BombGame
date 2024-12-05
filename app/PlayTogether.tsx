import InputTimer from '@/src/components/PlayTogether/InputTimer';
import { Container, Title, ScrollContainer } from './styles/PlayTogether.styles'
import { BombMessage } from '@/src/components/PlayTogether/InputTimer/styled';
import TipInput from '@/src/components/PlayTogether/InputTimer/TipInput';
import InputPassword from '@/src/components/PlayTogether/InputPassword';
import ButtonComponent from '@/src/components/Buttons';
import { router } from 'expo-router'

function PlayTogether() {

    const handleStartGame = () => {
        alert("Jogo Iniciado !")
    }

    const handleNavToStartGame = () => {
        router.back();
    }
    return ( 
    <ScrollContainer>
        <Container>
            <Title>Bomb Game - Dupla</Title>
            <InputTimer/>
            <BombMessage>Mensagem de erro temporária</BombMessage>
            <TipInput/>
            <InputPassword/>
            <ButtonComponent buttonText="Iniciar" handlePress={handleStartGame}/>
            <ButtonComponent buttonText="Página Inicial" handlePress={handleNavToStartGame}/>
        </Container>
    </ScrollContainer>
     );
}

export default PlayTogether;