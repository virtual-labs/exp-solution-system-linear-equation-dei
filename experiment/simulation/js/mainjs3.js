


function isConsistent() {
    const rank = localStorage.getItem("rank");
    const rank2 = localStorage.getItem("rank2");
    return rank == rank2;
}

function updateUI(msgId, msg, activeBtn, inactiveBtn, color) {
    document.getElementById(msgId).innerHTML = msg;
    document.getElementById(activeBtn).style.backgroundColor = color;
    document.getElementById(inactiveBtn).style.backgroundColor = "";
}

function checkRC(type) {
    const ok = isConsistent();

    if (type === "bRange") {
        ok
        ? updateUI(
            "consiss",
            "&emsp; Correct. <span style='background-color:yellow;padding:0 0.2rem;'> <i>b</i> &isin; Range <i>T</i></span>",
            "btn11", "btn12", "lightgreen"
          )
        : updateUI(
            "consiss",
            "&emsp; Incorrect! <span style='background-color:yellow;padding:0 0.2rem;'> <i>b</i> &notin; Range <i>T</i></span>",
            "btn11", "btn12", "red"
          );
    }

    if (type === "bnRange") {
        ok
        ? updateUI(
            "consiss",
            "&emsp; Incorrect! <span style='background-color:yellow;padding:0 0.2rem;'> <i>b</i> &isin; Range <i>T</i></span>",
            "btn12", "btn11", "red"
          )
        : updateUI(
            "consiss",
            "&emsp; Correct! <span style='background-color:yellow;padding:0 0.2rem;'> <i>b</i> &notin; Range <i>T</i></span>",
            "btn12", "btn11", "lightgreen"
          );
    }

    if (type === "consis") {
        ok
        ? updateUI(
            "consiss2",
            "&emsp; Correct! <span style='background-color:yellow;padding:0 0.2rem;'>Consistent</span>",
            "btn13", "btn14", "lightgreen"
          )
        : updateUI(
            "consiss2",
            "&emsp; Incorrect! <span style='background-color:yellow;padding:0 0.2rem;'>Inconsistent</span>",
            "btn13", "btn14", "red"
          );
    }

    if (type === "inconsis") {
        ok
        ? updateUI(
            "consiss2",
            "&emsp; Incorrect! <span style='background-color:yellow;padding:0 0.2rem;'>Consistent</span>",
            "btn14", "btn13", "red"
          )
        : updateUI(
            "consiss2",
            "&emsp; Correct! <span style='background-color:yellow;padding:0 0.2rem;'>Inconsistent</span>",
            "btn14", "btn13", "lightgreen"
          );
    }
}

function checkAnswer() {
      const ans = document.getElementById("q1").value;
      const result = document.getElementById("result");

      if (ans === "b") {
        result.innerHTML = "&emsp;&emsp;✅ Correct!";
        result.style.color = "green";
      } else if (ans === "") {
        result.innerHTML = "&emsp;&emsp;⚠️ Please select an option.";
        result.style.color = "orange";
      } else {
        result.innerHTML = "&emsp;&emsp;❌ Incorrect. Correct answer is <i>AX = B</i>";
        result.style.color = "red";
      }
    }

    function checkAnswer2() {
      const ans = document.getElementById("q2").value;
      const result = document.getElementById("result2_1");

      if (ans === "c") {
        result.innerHTML = "&emsp;&emsp;✅ Correct!";
        result.style.color = "green";
        document.getElementById("reasonbtn").style.display="";
      } else if (ans === "") {
        result.innerHTML = "&emsp;&emsp;⚠️ Please select an option.";
        result.style.color = "orange";
      } else {
        result.innerHTML = "&emsp;&emsp;❌ Incorrect. Correct answer is <i>T</i>(<i>x</i>) = <i>b</i>";
        result.style.color = "red";
        document.getElementById("reasonbtn").style.display="";
      }
      
    }

    function reasonAns(){
       document.getElementById("te1").style.display="";
    }