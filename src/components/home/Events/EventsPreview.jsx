import "./EventsPreview.css";

import EventsCard from "./EventsCard";

import music from "../../../assets/images/music-event.jpg";
import dance from "../../../assets/images/dance-event.jpg";
import pottery from "../../../assets/images/pottery-event.jpg";

const events = [

  {
    title:"Open Mic Night",
    category:"Music",
    date:"12 Aug 2026",
    time:"6:00 PM",
    image:music
  },

  {
    title:"Contemporary Dance Workshop",
    category:"Dance",
    date:"18 Aug 2026",
    time:"10:00 AM",
    image:dance
  },

  {
    title:"Pottery for Beginners",
    category:"Pottery",
    date:"23 Aug 2026",
    time:"2:00 PM",
    image:pottery
  }

];

function EventsPreview(){

    return(

<section className="events-preview">

<div className="container">

<div className="events-heading">

<span>UPCOMING EVENTS</span>

<h2>
Experience Creativity
Beyond The Studios
</h2>

<p>
Discover workshops,
performances,
community gatherings
and inspiring creative experiences.
</p>

</div>

<div className="events-grid">

{
events.map((event,index)=>(
<EventsCard
key={index}
{...event}
/>
))
}

</div>

<div className="events-button">

<button className="secondary-btn">

View All Events

</button>

</div>

</div>

</section>

    )

}

export default EventsPreview;