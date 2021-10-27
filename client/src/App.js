import { Component } from 'react';

import * as postServices from './services/postServices';

import Header from './components/Header';
import Footer from './components/Footer';
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
        posts: [],
        selectedPost: null,
      }
    }

    componentDidMount(){
        postServices.getAll()
          .then(posts => {
              this.setState({posts})
          });
    }

    onMenuItemOnClick(id) {
       this.setState({selectedPost: id});
        
    }

    getPosts() {
      if (!this.state.selectedPost) {
        return this.state.posts;
      } else {
        return [this.state.posts.find(x => x.id == this.state.selectedPost)]
      }
    }

    render() {
      return (
        <div className={style.app}>
            <Header />            
         
            <div className={style.container}> 
              <Main posts={this.getPosts()}  />
    
              <Menu onMenuItemOnClick={this.onMenuItemOnClick.bind(this)} />
              
            </div>    

            <Footer />  
        </div>
      );
    }
}

export default App;
