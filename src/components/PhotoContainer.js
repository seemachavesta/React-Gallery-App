import React from 'react';
import Photos from './Photo';
import NotFound from './NotFound';

const PhotoGallery = (props) => {
  let result = props.data;
  let images;
  if(result.length > 0){
    images =  result.map(img => 
      <Photos url={`https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}_m.jpg`} key={img.id} title={img.title}/>
    );
  }else{
    images = <NotFound/>
  }
  
   return (
     <div className="photo-container">
       <ul>
         {images}
       </ul> 
    </div>
   )
}

export default PhotoGallery