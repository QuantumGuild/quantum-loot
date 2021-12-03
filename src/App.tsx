import React, {useMemo} from 'react';
import './App.css';
import {Container, createTheme, CssBaseline, ThemeProvider, useMediaQuery} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage";


function App() {

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = useMemo(() => createTheme({
        palette: {
            mode: prefersDarkMode ? 'dark' : 'light',
        }
    }), [prefersDarkMode])

    return <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Container>
            <Routes>
                <Route index element={<HomePage/>}/>
            </Routes>
        </Container>
    </ThemeProvider>
}

export default App;
