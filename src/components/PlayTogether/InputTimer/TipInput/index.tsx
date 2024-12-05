import { Container, TipTitle, InputContainer, Input } from './styled'
function TipInput() {
    return ( 
        <Container>
          <TipTitle>Dica da senha</TipTitle>
          <InputContainer>
            <Input placeholder="Dica para a sua dupla" />
          </InputContainer>
        </Container>
     );
}

export default TipInput;