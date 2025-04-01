import Page from './components/Page';
import { useState } from 'react';
 
 const App = () => {
     const [theme, setTheme] = useState("light");
 
     const toggleTheme = () => {
         setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
     };
 
     return (
          <div className={`app ${theme}`}>
            <Page theme={theme} toggleTheme={toggleTheme} />
          </div>
     );
 }
 
 export default App;