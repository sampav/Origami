import { Component } from 'react';

import * as postServices from './services/postServices';

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
    constructor(props) {
      super(props);

      this.state = {
        posts: []
      }
    }

    componentDidMount(){
        postServices.getAll()
          .then(posts => {
              this.setState({posts})
          });
    }

    render() {
      return (
        <div className={style.app}>
            <Header />            
         
            <div className={style.container}> 
              <Main posts={this.state.posts}/>
    
              <Menu />
            </div>      
        </div>
      );
    }
}

export default App;
