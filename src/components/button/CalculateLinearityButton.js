import React from "react";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";

// import { incColumn } from '../../actions'

var json = {
  analytical_data:
    "[[0.188, 0.192, 0.203], [0.349, 0.346, 0.348], [0.489, 0.482, 0.492], [0.637, 0.641, 0.641], [0.762, 0.768, 0.786], [0.931, 0.924, 0.925]]",
  concentration_data:
    "[[0.008, 0.008016, 0.008128], [0.016, 0.016032, 0.016256], [0.02, 0.02004, 0.02032],[0.027999996640000406, 0.028055996633280407, 0.02844799658624041], [0.032, 0.032064, 0.032512], [0.04, 0.04008, 0.04064]]",
};

function handleLinearityCalculation() {
  fetch("/linearity_data", {
    method: "POST",
    cache: "no-cache",
    headers: {
      content_type: "application/json",
    },
    body: JSON.stringify(json),
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);
    });
}

const CalculateLinearityButton = () => {
  return (
    <Button variant="contained" onClick={handleLinearityCalculation}>
      Calculate Linearity
    </Button>
  );
};

export default CalculateLinearityButton;

// const mapDispatchToProps = dispatch => {
//   return {
//     incColumn: () => {dispatch(incColumn())}
//   }
// }

// export default connect(null, mapDispatchToProps)(IncColumnButton);
