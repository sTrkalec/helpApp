// Nome de componente = funcao. Tem que começar com letra Maiúscula
import { Envelope, Key } from "phosphor-react-native"
import {useState} from "react"
import { VStack, Heading, Icon, useTheme } from 'native-base';
import Logo from "../assets/logo_primary.svg"
import { Input } from '../components/Input';
import { Button } from '../components/Button';


export function SingIn() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const { colors } = useTheme();

    function handle(){
        console.log(`Nome: ${name} \nPassword: ${password}`)
    }

    return (
        <VStack flex={1} alignItems="center" bg={"gray.600"} px={8} pt={24}>
            <Logo />
            <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
                Acesse sua conta
            </Heading>

            <Input
                placeholder='E-mail'
                mb={4}
                InputLeftElement={<Icon as={<Envelope color={colors.gray[300]} />} ml={4} />}
                onChangeText={setName}
           />

            <Input placeholder='Senha'
                InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
                secureTextEntry
                mb={8}
                onChangeText={setPassword}
            />
            <Button title="Entrar" w="full" onPress={handle}/>
        </VStack>
    )
}