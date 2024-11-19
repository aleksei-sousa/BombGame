import { Container, Icon, NumberParagraph, Paragraph, ScrollTextRules, Title } from './styles'
import { Alert, Text } from 'react-native';

function Rules () {

const handleNavToStart = () => {
    Alert.alert('ícone clicado')
}

    return ( 
        <Container>
            <Icon name='arrow-back-ios' onPress={}/>
            <ScrollTextRules>
              <Title>
                Jogando Solo    
              </Title>
              <NumberParagraph>1 -</NumberParagraph>
              <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam tincidunt quam, non luctus nibh dignissim ac. Maecenas auctor.</Paragraph>
              <NumberParagraph>2 -</NumberParagraph>
              <Paragraph>Pellentesque pellentesque euismod leo, eget gravida urna accumsan ut. Praesent imperdiet tortor magna, sit amet sagittis est convallis scelerisque. Aliquam massa orci, scelerisque id nisi sit amet.</Paragraph>

            <Title style={{marginTop: 30}}>
                Jogando Em dupla   
            </Title>
            <NumberParagraph>1 -</NumberParagraph>
              <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam tincidunt quam, non luctus nibh dignissim ac. Maecenas auctor.</Paragraph>
              <NumberParagraph>2 -</NumberParagraph>
              <Paragraph>Pellentesque pellentesque euismod leo, eget gravida urna accumsan ut. Praesent imperdiet tortor magna, sit amet sagittis est convallis scelerisque. Aliquam massa orci, scelerisque id nisi sit amet.</Paragraph>
            <NumberParagraph>3 -</NumberParagraph>
            <Paragraph style={{marginBottom: 20}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam tincidunt quam, non luctus nibh dignissim ac. Maecenas auctor.</Paragraph>
            </ScrollTextRules>
        </Container>
     );
}

export default Rules ;