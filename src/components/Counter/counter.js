import React from "react";
import "./style.css";
// this code defines the counter-score section
function Counter(props) {
  return (
    <div className="card">
        <div class="score" >
            <h2 id="score-count">score-count<span id="score-text"></span></h2> {props.count}
        </div>    
    </div>
  );
}

export default Counter;
