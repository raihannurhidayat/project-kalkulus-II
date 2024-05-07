const validate = (deret, setDeret, operator, setAlert) => {
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
