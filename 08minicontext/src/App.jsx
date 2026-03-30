
import './App.css'
import Usercontextprovider from './context/Usercontextprovider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {


  return (
    <div>
      <Usercontextprovider>
        <h1 className=" p-4 text-center text-3xl m-2 rounded-2xl underline">
          JITENDRA SHARMA
        </h1>
      <Login />
      <Profile/>
      </Usercontextprovider>
    </div>
  );
}

export default App
