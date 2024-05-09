const validate = (deret, setDeret, operator, setAlert) => {
  if(deret.length == 1){
    setAlert(true)
    setDeret([]);
  }
  for (let i = 0; i < deret.length - 2; i++) {
    if (operator === "aritmatika") {
      if (deret[i + 1] - deret[i] !== deret[2 + i] - deret[1 + i]) {
        console.log("TIdak konsisten");
        setAlert(true)
        setDeret([]);
      }
    } else if (operator === "geometri") {
      if (deret[i + 1] / deret[i] !== deret[2 + i] / deret[1 + i]) {
        console.log("TIdak konsisten");
        setAlert(true)
        setDeret([]);
      }
    }
  }
};

export default validate;
