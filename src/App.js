import { ViewPosts } from './viewPost';
import { AddNewPost } from './AddNewPost';
import { Home } from './Home';
import { BrowserRouter, Route, Routes,} from 'react-router-dom';

function App() {


  return (
    <div >
 <BrowserRouter>
 <Routes> 
      <Route path='/' element = {<Home/>}>  </Route>
      <Route path='/post' element = {<AddNewPost/>} > </Route>
    <Route path='/View' element = {<ViewPosts/>}>  </Route>
    </Routes> 

      </BrowserRouter>

{/* 
      <BrowserRouter>
      <Switch>

      </Switch>
  <Routes>
    <Route path='/Post' element = {<AddNewPost/>} Comp> </Route>
    <Route path='/View' element = {<ViewPosts/>}>  </Route>
    <Route path='/' element = {<Home/>}>  </Route>
    </Routes>    
  
   </BrowserRouter> */}
    </div>
  );
}

export default App;