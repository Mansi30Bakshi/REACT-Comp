import './App.css'
import CHead from './Components/CHead';
import CMotto from './Components/CMotto';
import CTime from './Components/CTime';
import "bootstrap/dist/css/bootstrap.min.css";
function App(){
  return <center>
    <CHead/>
    <CMotto/>
    <CTime/>
  </center>
}
export default App;