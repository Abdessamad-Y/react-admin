import {ColorModeContext, colorModeContext,useMode} from './theme'
import {CssBaseline,ThemeProvider} from '@mui/material'
import Topbar from './scenes/global/Topbar'
import Sidebar from './scenes/global/Sidebar'
import {Routes,Route} from 'react-router-dom'

function App() {
  const [theme,colorMode] = useMode()
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Sidebar />
        <div className="app">
          <main className='content'>
            <Topbar />
            <Routes>

            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
