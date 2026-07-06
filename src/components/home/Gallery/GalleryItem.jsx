import "./GalleryItem.css";

function GalleryItem({

image,

category,

size

}){

return(

<div className={`gallery-item ${size}`}>

<img

src={image}

alt={category}

/>

<div className="gallery-overlay">

<span>

{category}

</span>

</div>

</div>

)

}

export default GalleryItem;