import { Routes, Route } from "react-router-dom";

import HomePage from './HomePage/HomePage'
import FavoritePage from './FavoritePage/FavoritePage';
import MovieDetails from './MovieDetails/MovieDetails'
import AddMovie from './AddMovie/AddMovie'
import Header from './Header/Header';

function App() {
   return (
     <div className="App">
      <Header/>
       <Routes>
            <Route exact path="/" element={<HomePage/>} />
            <Route path="/favorite" element={<FavoritePage/>} />
            <Route path="/movie/:id" element={<MovieDetails/>} />
            <Route path="/add/movie" element={<AddMovie/>} />
        </Routes>
     </div>
   );
 }
 
 export default App;