import { Switch, useColorMode } from "@chakra-ui/react"


export const DarkModeSwitch = () => {

    const {colorMode, toggleColorMode} = useColorMode()

    const isDark = colorMode === 'dark';

    return(
        <Switch
        position='fixed'
        isChecked={isDark}
        onChange={toggleColorMode}
        
        />
    )
}