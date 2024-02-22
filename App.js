import {Users} from './DynamicRouting/Users';
import {UsersDetail} from './DynamicRouting/Users-details';
import {Routes,Route} from 'react-router-dom';
import {Home} from './Home';

function App(){
    return (
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="/Users" element={<Users/>}>Users</Route>
            <Route path="/Users/:Id" element={<UsersDetail/>}>data</Route>
        </Routes>
    )
}
export default App;