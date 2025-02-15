import React from 'react'
import Footerone from '../footerone/Footerone';
import Footertwo from '../footertwo/Footertwo';
import Footerthree from '../footerthree/Footerthree';


const Footer = () => {
  return (
    <div style={{display: "flex", justifyContent:"space-around", background:"grey", position:"absolute", bottom:0, width:"100%"}}>
      <Footerone name="Footer one"/>
      <Footertwo name="Footer one"/>
      <Footerthree name="Footer one"/>
    </div>
  )
}

export default Footer
