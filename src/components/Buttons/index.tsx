import { Text } from 'react-native';
import { Button, ButtonContent } from './styles'
function ButtonComponent({buttonText, handlePress}) {
    return ( 
        <Button activeOpacity={0.85} onPress={handlePress}>
            <Text>
                <ButtonContent>
                    {buttonText}
                </ButtonContent>
            </Text>
        </Button>
     );
}

export default ButtonComponent;