import "./Team.css";
import TeamCard from "./TeamCard";

import team1 from "../../../assets/team1.jpg";
import team2 from "../../../assets/team2.jpg";
import team3 from "../../../assets/team3.jpg";
import team4 from "../../../assets/team4.jpg";

const team = [

{
image:team1,
name:"Jane Doe",
role:"Founder & Creative Director",
bio:"Passionate about creating spaces where artists can thrive."
},

{
image:team2,
name:"John Smith",
role:"Studio Manager",
bio:"Ensuring every creator enjoys a world-class experience."
},

{
image:team3,
name:"Grace Wanjiku",
role:"Community Coordinator",
bio:"Connecting artists, ideas and opportunities."
},

{
image:team4,
name:"David Otieno",
role:"Production Engineer",
bio:"Helping musicians and podcasters achieve professional results."
}

];

function Team(){

return(

<section className="team">

<div className="container">

<div className="team-heading">

<span>OUR TEAM</span>

<h2>

Meet The People
Behind Nafsi Studios

</h2>

<p>

A passionate team dedicated to supporting creativity,
collaboration and artistic excellence.

</p>

</div>

<div className="team-grid">

{

team.map((member,index)=>(

<TeamCard

key={index}

{...member}

/>

))

}

</div>

</div>

</section>

)

}

export default Team;