import { motion } from "framer-motion";
import {
FaInstagram,
FaLinkedinIn
} from "react-icons/fa";

import "./TeamCard.css";

function TeamCard({

image,

name,

role,

bio

}){

return(

<motion.div

className="team-card"

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

transition={{duration:.7}}

viewport={{once:true}}

>

<div className="team-image">

<img

src={image}

alt={name}

/>

<div className="team-social">

<a href="https://linkedin.com">
<FaInstagram/>
</a>

<a href="https://linkedin.com">
<FaLinkedinIn/>
</a>

</div>

</div>

<div className="team-content">

<h3>{name}</h3>

<h5>{role}</h5>

<p>{bio}</p>

</div>

</motion.div>

)

}

export default TeamCard;