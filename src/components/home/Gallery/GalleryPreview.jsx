import "./GalleryPreview.css";
import GalleryItem from "./GalleryItem";

import music1 from "../../../assets/images/music1.jpg";
import music2 from "../../../assets/images/music2.jpg";
import dance1 from "../../../assets/images/dance1.jpg";
import podcast1 from "../../../assets/images/podcast1.jpg";
import pottery1 from "../../../assets/images/pottery1.jpg";
import event1 from "../../../assets/images/event1.jpg";

const gallery = [

{
id:1,
category:"Music",
image:music1,
size:"large"
},

{
id:2,
category:"Dance",
image:dance1,
size:"portrait"
},

{
id:3,
category:"Podcast",
image:podcast1,
size:"large"
},

{
id:4,
category:"Pottery",
image:pottery1,
size:"portrait"
},

{
id:5,
category:"Music",
image:music2,
size:"square"
},

{
id:6,
category:"Events",
image:event1,
size:"large"
}

];


function GalleryPreview(){

return(

<section className="gallery-preview">

<div className="container">

<div className="gallery-heading">

<span>LIFE AT NAFSI</span>

<h2>

Creativity
Captured.

</h2>

<p>

Explore moments of inspiration,
collaboration and artistic expression
across every creative space.

</p>

</div>

<div className="gallery-filter">

<button className="active">

All

</button>

<button>

Music

</button>

<button>

Podcast

</button>

<button>

Dance

</button>

<button>

Pottery

</button>

<button>

Events

</button>

</div>

<div className="gallery-grid">

{

gallery.map((item)=>(

<GalleryItem

key={item.id}

{...item}

/>

))

}

</div>

</div>

</section>

)

}
export default GalleryPreview;