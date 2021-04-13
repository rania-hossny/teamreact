import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Profile from './pages/Profile';
import Teams from './pages/Teams';
import Calendar from './pages/Calendar';
import Message from './pages/Message';
import Setting from './pages/Setting';
import Teamcontent from './pages/Teamcontent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Posts from './pages/Posts';
import Files from './pages/Files';






function App() {
  return (
    <>
    <Router>
      <Navbar/>

      <Switch>
        <Route path="/" exact component={Profile}/>
        <Route path="/Teams" component={Teams}/>
        <Route path="/Calendar" component={Calendar}/>
        <Route path="/Message" component={Message}/>
        <Route path="/Setting" component={Setting}/>
        <Route  path="/Teamcontent/:id" component={Teamcontent}/>
        {/* <Route path="/posts" component={Posts}></Route> */}
        <Route path="/files" component={Files}></Route>
      </Switch>
    </Router>
      
    </>
  );
}

export default App;
