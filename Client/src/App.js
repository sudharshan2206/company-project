import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Readerregistration } from './Registration/registration';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Loginform } from './Registration/login';
import { Readerdashboard } from './Dashboard/readerdashbrd';
import { Authordashboard } from './Dashboard/authordash';
import { Alohomora } from './Dashboard/alohomora';
import { Contact } from './Contact/contact';
import { Addbook } from './Add Book/addbook';
import { Bookreview } from './Book Review/bookreview';
import { Singlebook } from './Book Review/singlebook';
import { Booklist } from './Book List/booklist';
import { Userupdate } from './Update Delete/userupdate';
import { Bookupdate } from './Update Delete/bookupdate';
function App() {
  return (
   <>
 <BrowserRouter>
 <Routes>
 <Route path='/' element={<Alohomora/>}/>
  <Route path='/register' element={<Readerregistration/>}/>
  <Route path='/loginform' element={<Loginform/>}/>
  <Route path='/readerdash/:id' element={<Readerdashboard/>}/>
  <Route path='/readerdash' element={<Readerdashboard/>}/>
  <Route path='/authordash/:id' element={<Authordashboard/>}/>
  <Route path='/authordash' element={<Authordashboard/>}/>
  <Route path='/contact' element={<Contact/>}/>
 <Route path='/addbook' element={<Addbook/>}/>
 <Route path='/bookreview' element={<Bookreview/>}/>
 <Route path='/booklist' element={<Booklist/>}/>
 <Route path='/singlebook/:id' element={<Singlebook/>}/>
 <Route path='/userupdate/:id' element={<Userupdate/>}/>
 <Route path='/bookupdate/:bookid' element={<Bookupdate/>}/>
  
 </Routes>
 </BrowserRouter>
   </>
  );
}

export default App;
