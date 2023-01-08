import {ColorModeContext, colorModeContext,useMode} from './theme'
import {Routes,Route} from 'react-router-dom'
import {CssBaseline,ThemeProvider} from '@mui/material'
import Topbar from './scenes/global/Topbar'
import SideBar from './scenes/global/Sidebar'
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
//import Invoices from "./scenes/invoices";
//import Contacts from "./scenes/contacts";
//import Bar from "./scenes/bar";
//import Form from "./scenes/form";
//import Line from "./scenes/line";
//import Pie from "./scenes/pie";
//import FAQ from "./scenes/faq";
//import Geography from "./scenes/geography";
//import Calendar from "./scenes/calendar/calendar";

import { useState } from "react";
function App() {
  const [theme,colorMode] = useMode()
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        
        <div className="app">
          <SideBar />
          <main className='content'>
          <Topbar/>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/team' element={<Team />}
          </Routes>
          
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
