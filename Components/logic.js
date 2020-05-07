const calcy = () => {
  let wd = document.getElementById("wd").value;
  let maths = document.getElementById("maths").value;
  let comp = document.getElementById("comp").value;
  let phy = document.getElementById("phy").value;
  let grade = "";

  let totalMarks =
    parseFloat(wd) + parseFloat(maths) + parseFloat(comp) + parseFloat(phy);
  alert(totalMarks);

  let perc = (totalMarks / 400) * 100;
  alert(perc);

  if (perc <= 100 && perc >= 80) {
    grade = "A";
  } else if (perc <= 79 && perc >= 60) {
    grade = "B";
  } else if (perc <= 59 && perc >= 40) {
    grade = "C";
  } else {
    grade = "FAIL";
  }

  document.getElementById(
    "showData"
  ).innerHTML = `Out of 400 your total is ${totalMarks} and percentage is ${perc}%. <br> Your grade is ${grade}.`;
};
