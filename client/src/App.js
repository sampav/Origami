import { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Menu from './components/Menu';

import style from './App.module.css';

//******************Function Component !!!! ****************///

// function App() {
//   return (
//     <div className={style.app}>
//         <Header />            
     
//         <div className={style.container}> 
//           <Main />

//           <Menu />
//         </div>      
//     </div>
//   );
// }

////******************Class Component !!!! ****************///

class App extends Component {
    render() {
      return (
        <div className={style.app}>
            <Header />            
         
            <div className={style.container}> 
              <Main />
    
              <Menu />
            </div>      
        </div>
      );
    }
}

export default App;
