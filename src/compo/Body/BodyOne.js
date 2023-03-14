import { useState } from "react";
import Bodyfive from "./Bodyfive";
import Bodyfour from "./Bodyfour";
import BodyNames from "./BodyNames";
import Bodysix from "./Bodysix";
import Bodythree from "./Bodythree";
import Bodytwo from "./Bodytwo";
import "./one.css";
export default function BodyOne() {
  const [ind, setInd] = useState(true);
  const [mut, setmut] = useState(false);
  const [fix, setfix] = useState(false);
  const [uss, setuss] = useState(false);
  const stocks = () => {
    setfix(false);
    setmut(false);
    setuss(false);
    setInd(true);
  };

  const mutual = () => {
    console.log("kkk");
    setInd(false);
    setfix(false);
    setuss(false);
    setmut(true);
  };
  const fixed = (e) => {
    setInd(false);

    setmut(false);
    setuss(false);
    setfix(true);
   
  };
  const us = () => {
    setInd(false);
    setmut(false);
    setfix(false);
    setuss(true);
  };
  let name1 = "";

  return (
    <div className="body_main">
    <div className="body_bo">
      <h1 className="body_heading">Super Finance App</h1>

      <h1 className="moving_text">
        <span> </span>
      </h1>

      <div className="body_names">
        <h3
          style={
            ind
              ? {
                  background: "white",
                  color: "black",
                  width: "150px",
                  borderRadius: "10px",
                }
              : {
                  border: "none",
                  background: "rgb(16, 16, 16)",
                  color: "white",
                  borderRadius: "0",
                }
          }
          className="body_name_item"
          onClick={stocks}
        >
          INDstocks
        </h3>
        <h3
          style={
            mut
              ? {
                  background: "white",
                  color: "black",
                  width: "150px",
                  borderRadius: "10px",
                }
              : {
                  border: "none",
                  background: "rgb(16, 16, 16)",
                  color: "white",
                  borderRadius: "0",
                }
          }
          className="body_name_item"
          onClick={mutual}
        >
          Mutual Funds
        </h3>
        <h3
          style={
            fix
              ? {
                  background: "white",
                  color: "black",
                  width: "150px",
                  borderRadius: "10px",
                }
              : {
                  border: "none",
                  background: "rgb(16, 16, 16)",
                  color: "white",
                  borderRadius: "0",
                }
          }
          className="body_name_item"
          onClick={fixed}
        >
          Fixed Deposits
        </h3>
        <h3
          style={
            uss
              ? {
                  background: "white",
                  color: "black",
                  width: "150px",
                  borderRadius: "10px",
                }
              : {
                  border: "none",
                  background: "rgb(16, 16, 16)",
                  color: "white",
                  borderRadius: "0",
                }
          }
          className="body_name_item"
          onClick={us}
        >
          US Stocks
        </h3>
      </div>

      {ind ? (
        <BodyNames
          name1={"Free"}
          name2={"Trading & Demat account"}
          name3={"ZER0"}
          name4={"AMC charges"}
          name5={name1}
          name6={"Invest securely in 6000+ Indian stocks and ETFs."}
        />
      ) : (
        ""
      )}
      {mut ? (
        <BodyNames
          name1={"ZER0"}
          name2={"commission direct mutual funds"}
          name3={"Free"}
          name4={"switch from regular to direct funds"}
          name5={name1}
          name6={"Invest securely in 5000+ Direct Mutual Funds"}
        />
      ) : (
        ""
      )}
      {fix ? (
        <BodyNames
          name1={"8.45%"}
          name2={"Get upto 8.45%* on your fixed deposits"}
          name3={"Free"}
          name4={`Instant payments & withdrawals `}
          name5={name1}
          name6={" Invest securely in top fixed deposits"}
        />
      ) : (
        ""
      )}
      {uss ? (
        <BodyNames
          name1={"Free"}
          name2={`
          US trading a/c with best exchange rates`}
          name3={"ZERO"}
          name4={`
          Brokerage, Joining fee and Commissions`}
          name5={name1}
          name6={"Invest securely in 5000+ US stocks and ETFs."}
        />
      ) : (
        ""
      )}
     <Bodytwo/>
     <Bodythree/>
     <Bodyfour/>
     <Bodyfive/>
     <Bodysix/>
    </div>
    </div>
  );
}
