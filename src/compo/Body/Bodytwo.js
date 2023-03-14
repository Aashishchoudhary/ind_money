import React from "react";
import "./two.css";
import StarRateIcon from "@mui/icons-material/StarRate";
export default function Bodytwo() {
  return (
    <>
    <div className="body_two_heading">
      <div>
        <h3>100K+ 5-Star Reviews 5-star-icon</h3>
        <StarRateIcon />
        <StarRateIcon />
        <StarRateIcon />
        <StarRateIcon />
        <StarRateIcon />
      </div>
      <div>
        <p>Trusted by</p>
        <h4>70,00,000+ Happy Indians</h4>
      </div>
      <div>
        <button className="btn_two">Explore Now</button>
      </div>
    </div>
    <div className="two_menu">
    <div className="two_menu_sub"><h5>Trending on INDmoney:

Zomato Share Price </h5>
    
    <h5>Adani Power Share Price

</h5>
    <h5>Tata Motors Share Price</h5>
    <h5>Parag Parikh Flexi cap Fund</h5></div>
    <div className="two_menu_sub2">
        <h6>HDFC Balanced Advantage Fund

</h6>
        <h6>SIP Calculator</h6>
        <h6>Income Tax Calculator</h6>
    </div>
    </div>
    
</>
  );
}
