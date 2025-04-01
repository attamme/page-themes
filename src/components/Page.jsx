import Header from './Header';
 
 const Page = ({theme, toggleTheme}) => {
     return (
         <div id='app'>
             <Header theme={theme} toggleTheme={toggleTheme}/>
 
             <article>
                 <h2>React Course</h2>
                 <p>
                     A course that teaches you React.
                 </p>
             </article>
         </div>
     );
 }
 
 export default Page