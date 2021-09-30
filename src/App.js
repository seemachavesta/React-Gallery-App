import React, {useState, useEffect} from 'react'
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';


// axios and api keys to fetch data form flicker.com
import axios from 'axios';
import apiKey from './config';
//data for 3 default topic links
import {cats, dogs, birds} from './components/data'
// component for main container
import SearchForm from './components/SearchForm';
import Navbar from './components/Nav';
import NotFound from './components/NotFound';
import PhotoGallery from './components/PhotoContainer';



const App = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    performSearch()
  },[]);

  const performSearch = async (query = 'funny faces') => {
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}&size=z&per_page=24&format=json&nojsoncallback=1`;

    await axios.get(url)
     .then(res => setPhotos(res.data.photos.photo))
     .catch( err => console.log(`Error has accoured during fatching data ${err}`));
     setLoading(false);
    
  } 
  return(
    
    <BrowserRouter>
     <div className="Container">
       <SearchForm onSearch={performSearch}/>
       <Navbar/>
       {
         (loading)?
         <p>Loading...</p>
         : <Switch>
            <Route exact path="/" render={ () => <PhotoGallery data={photos}/>}/>
            <Route path="/cats" render={ () => <PhotoGallery data={cats}/>}/>
            <Route path="/dogs" render={ () => <PhotoGallery data={dogs}/>}/>
            <Route path="/birds" render={ () => <PhotoGallery data={birds}/>}/>
            <Route render={() => <NotFound/>}/>
       </Switch>
       }
      </div>
    </BrowserRouter>
    
  )
}


export default App;
