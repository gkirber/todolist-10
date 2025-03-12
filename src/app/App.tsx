import './App.css'
import {selectThemeMode} from "@/app/app-selectors.ts";
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {getTheme} from "@/common/theme/theme.ts";
import {ThemeProvider} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import {Main} from "@/app/Main.tsx";
import {Header} from "@/common/components/Header/Header.tsx";


export const App = () => {
    const themeMode = useAppSelector(selectThemeMode)

    const theme = getTheme(themeMode)

    return (
        <ThemeProvider theme={theme}>
            <div className={'app'}>
                <CssBaseline />
                <Header/>
                <Main/>
            </div>
        </ThemeProvider>
    )
}