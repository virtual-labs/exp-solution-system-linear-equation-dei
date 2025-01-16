var formSubmitted = false;
 
function submit() {


  let  a = parseInt(document.getElementById("a").value);
    let  b = parseInt(document.getElementById("b").value);
    let  c = parseInt(document.getElementById("c").value);
    let  b1 = parseInt(document.getElementById("b1").value); 
    let  d = parseInt(document.getElementById("d").value);
    let  e = parseInt(document.getElementById("e").value);
    let  f = parseInt(document.getElementById("f").value);
    let  b2 = parseInt(document.getElementById("b2").value);
    let x1="x<sub>1</sub>";
    let x2="x<sub>2</sub>";
         // Loop through each input field
    var isValid = true;
    var inputs = document.getElementsByClassName("eqn");
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            isValid = false;
            break;
        }
    }

    const matrix = [
    [parseFloat(document.getElementById('a').value), parseFloat(document.getElementById('b').value), parseFloat(document.getElementById('c').value)],
    [parseFloat(document.getElementById('d').value), parseFloat(document.getElementById('e').value), parseFloat(document.getElementById('f').value)]
  ];
  const matrix2 = [
    [parseFloat(document.getElementById('a').value), parseFloat(document.getElementById('b').value), parseFloat(document.getElementById('c').value), parseFloat(document.getElementById('b1').value)],
    [parseFloat(document.getElementById('d').value), parseFloat(document.getElementById('e').value), parseFloat(document.getElementById('f').value), parseFloat(document.getElementById('b2').value)]
  ];

  const rank = getMatrixRank(matrix);
  const rank2 = getMatrixRank(matrix2);
    // Display alert if any input is empty
    if (!isValid) {
        alert("Please enter all the values.");
    } else {
                localStorage.setItem("a", a);
                localStorage.setItem("b", b);
                localStorage.setItem("c", c);
                localStorage.setItem("d", d);
                localStorage.setItem("e", e);
                localStorage.setItem("f", f);
                localStorage.setItem("b1", b1);
                localStorage.setItem("b2", b2);
                localStorage.setItem("matrix", matrix);
                localStorage.setItem("matrix2", matrix2);
                localStorage.setItem("rank", rank);
                localStorage.setItem("rank2", rank2);

      document.getElementById("submisionmsg").innerHTML = "Values submitted sucessfully ! You can move further."
        formSubmitted = true;
    
    }
   
}


function smatrix() {

if (!formSubmitted) {
            alert("Please enter and submit all the values.");
            return;
        }

    let  a = parseInt(document.getElementById("a").value);
    let  b = parseInt(document.getElementById("b").value);
    let  c = parseInt(document.getElementById("c").value);
    let  b1 = parseInt(document.getElementById("b1").value); 
    let  d = parseInt(document.getElementById("d").value);
    let  e = parseInt(document.getElementById("e").value);
    let  f = parseInt(document.getElementById("f").value);
    let  b2 = parseInt(document.getElementById("b2").value);

    var isValid = true;
    var inputs = document.getElementsByClassName("eqn");
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            isValid = false;
            break;
        }
    }

    // Display alert if any input is empty
    if (!isValid) {
        alert("Please enter and submit all the values.");
    } else {
      document.getElementById("eqns").innerHTML = "<center>"+a + "x<sub>1</sub> + "+ b +"x<sub>2</sub> + "+c+"x<sub>3</sub> = "+b1+"<br>"+d + "x<sub>1</sub> + "+ e +"x<sub>2</sub> + "+f+"x<sub>3</sub> = "+b2+"</center>";
  
      
    }
  }

function showexp() {

  
        if (!formSubmitted) {
            alert("Please enter and submit all the values.");
            return;
        }

    let  a = parseInt(document.getElementById("a").value);
    let  b = parseInt(document.getElementById("b").value);
    let  c = parseInt(document.getElementById("c").value);
    let  b1 = parseInt(document.getElementById("b1").value); 
    let  d = parseInt(document.getElementById("d").value);
    let  e = parseInt(document.getElementById("e").value);
    let  f = parseInt(document.getElementById("f").value);
    let  b2 = parseInt(document.getElementById("b2").value);

    var isValid = true;
    var inputs = document.getElementsByClassName("eqn");
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            isValid = false;
            break;
        }
    }

    // Display alert if any input is empty
    if (!isValid) {
        alert("Please enter and submit all the values.");
    } else {
 
  // Display the result
  //document.getElementById("calcbtn2").style.display="block";
//   document.getElementById('result').innerHTML = "AX = B <br> where," ;
//   document.getElementById("mat").innerHTML ="\\[ A =  \\begin{pmatrix} "+a+" & "+b+" &  "+ c +" \\\\"  + d+"&" + e+"&"+   f + "\\end{pmatrix} \\ ,  B =  \\begin{pmatrix} "+b1+" \\\\"  + b2+"\\end{pmatrix}, X = \\begin{pmatrix} x1 \\\\ x2 \\\\ x3  \\end{pmatrix} \\]";
  document.getElementById("mat").innerHTML ="\\[ A = \\begin{pmatrix} "+a+" & "+b+" &  "+ c +" \\\\"  + d+"&" + e+"&"+   f + "\\end{pmatrix}\\]";
  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
    //   document.getElementById('result2').innerHTML = "<b>Linear map T associated with A : </b> <br>T:R<sup>3</sup> &rarr; R<sup>2</sup><br>Let B<sub>1</sub> = {(1,0,0), (0,1,0), (0,0,1)} for R<sup>3</sup>, B<sub>2</sub> = {(1,0), (0,1)} for R<sup>2</sup>" ;
    //   document.getElementById('te1').innerHTML = "T((0,0,1)) = " +a+ "(1, 0) + " +d+ "(0, 1)  <br>T((0,1,0)) = " +b+ "(1, 0) + " +e+ "(0, 1)  <br>T((0,0,1)) = " +c+ "(1, 0) + " +f+ "(0, 1)" ;
    //  document.getElementById('ty').innerHTML = "T(y) = b <br> T(y) = (" +a+ "y<sub>1</sub> + " +b+  "y<sub>2</sub> + "+c+ " y<sub>3</sub> ) , (" +d+ "y<sub>1</sub> + " +e+  "y<sub>2</sub> + "+f+ " y<sub>3</sub> ) ";
     
      
    }
}


function amat() {
  if (!formSubmitted) {
            alert("Please enter and submit all the values.");
            return;
        }
  
  let  a = parseInt(document.getElementById("a").value);
  let  b = parseInt(document.getElementById("b").value);
  let  c = parseInt(document.getElementById("c").value);
  let  b1 = parseInt(document.getElementById("b1").value); 
  let  d = parseInt(document.getElementById("d").value);
  let  e = parseInt(document.getElementById("e").value);
  let  f = parseInt(document.getElementById("f").value);
  let  b2 = parseInt(document.getElementById("b2").value);

  var isValid = true;
    var inputs = document.getElementsByClassName("eqn");
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            isValid = false;
            break;
        }
    }

    // Display alert if any input is empty
    if (!isValid) {
        alert("Please enter and submit all the values.");
    } else {

// Display the result
//document.getElementById("calcbtn2").style.display="block";
//   document.getElementById('result').innerHTML = "AX = B <br> where," ;
//   document.getElementById("mat").innerHTML ="\\[ A =  \\begin{pmatrix} "+a+" & "+b+" &  "+ c +" \\\\"  + d+"&" + e+"&"+   f + "\\end{pmatrix} \\ ,  B =  \\begin{pmatrix} "+b1+" \\\\"  + b2+"\\end{pmatrix}, X = \\begin{pmatrix} x1 \\\\ x2 \\\\ x3  \\end{pmatrix} \\]";
document.getElementById("amat").innerHTML ="\\[ A &#8314; = \\begin{pmatrix} "+a+" & "+b+" &  "+ c +" & "+ "| " +b1+ "\\\\"  + d+"&" + e+"&"+   f+" & "+ "| " +b2 + "\\end{pmatrix} \\]" ;
MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
//     document.getElementById('result2').innerHTML = "<b>Linear map T associated with A : </b> <br>T:R<sup>3</sup> &rarr; R<sup>2</sup><br>Let B<sub>1</sub> = {(1,0,0), (0,1,0), (0,0,1)} for R<sup>3</sup>, B<sub>2</sub> = {(1,0), (0,1)} for R<sup>2</sup>" ;
//     document.getElementById('te1').innerHTML = "T((0,0,1)) = " +a+ "(1, 0) + " +d+ "(0, 1)  <br>T((0,1,0)) = " +b+ "(1, 0) + " +e+ "(0, 1)  <br>T((0,0,1)) = " +c+ "(1, 0) + " +f+ "(0, 1)" ;
//    document.getElementById('ty').innerHTML = "T(y) = b <br> T(y) = (" +a+ "y<sub>1</sub> + " +b+  "y<sub>2</sub> + "+c+ " y<sub>3</sub> ) , (" +d+ "y<sub>1</sub> + " +e+  "y<sub>2</sub> + "+f+ " y<sub>3</sub> ) ";
   
    }
    
}

var grid_size = 12;
var x_axis_distance_grid_lines = 10;
var y_axis_distance_grid_lines = 5;
var x_axis_starting_point = { number: 1, suffix: '' };
var y_axis_starting_point = { number: 1, suffix: '' };

var canvas = document.getElementById("my-canvas");

var ctx = canvas.getContext("2d");

var canvas_width = canvas.width;
var canvas_height = canvas.height;

var num_lines_x = Math.floor(canvas_width/grid_size);
var num_lines_y = Math.floor(canvas_height/grid_size);
    
// Draw grid lines along X-axis
for(var i=0; i<=num_lines_x; i++) {
ctx.beginPath();
ctx.lineWidth = 1;

// If line represents X-axis draw in different color
if(i == x_axis_distance_grid_lines) 
    ctx.strokeStyle = "#000000";
else
    ctx.strokeStyle = "#dcdcdc";

if(i == num_lines_x) {
    ctx.moveTo(0, grid_size*i);
    ctx.lineTo(canvas_width, grid_size*i);
}
else {
    ctx.moveTo(0, grid_size*i+0.5);
    ctx.lineTo(canvas_width, grid_size*i+0.5);
}
ctx.stroke();
}

// Draw grid lines along Y-axis
for(i=0; i<=num_lines_y; i++) {
ctx.beginPath();
ctx.lineWidth = 1;

// If line represents X-axis draw in different color
if(i == y_axis_distance_grid_lines) 
    ctx.strokeStyle = "#000000";
else
    ctx.strokeStyle = "#dcdcdc";

if(i == num_lines_y) {
    ctx.moveTo(grid_size*i, 0);
    ctx.lineTo(grid_size*i, window.canvas_height);
}
else {
    ctx.moveTo(grid_size*i+0.5, 0);
    ctx.lineTo(grid_size*i+0.5, canvas_height);
}

ctx.stroke();
}

// Translate to the new origin. Now Y-axis of the canvas is opposite to the Y-axis of the graph. So the y-coordinate of each element will be negative of the actual
ctx.translate(y_axis_distance_grid_lines*grid_size, x_axis_distance_grid_lines*grid_size);

// Ticks marks along the positive X-axis
for(i=1; i<(num_lines_y - y_axis_distance_grid_lines); i++) {
ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = "#000000";

// Draw a tick mark 6px long (-3 to 3)
ctx.moveTo(grid_size*i+0.5, -3);
ctx.lineTo(grid_size*i+0.5, 3);
ctx.stroke();

// Text value at that point
ctx.font = '9px Arial';
ctx.textAlign = 'start';
ctx.fillText(x_axis_starting_point.number*i + x_axis_starting_point.suffix, grid_size*i-2, 15);
}

// Ticks marks along the negative X-axis
for(i=1; i<y_axis_distance_grid_lines; i++) {
ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = "#000000";

// Draw a tick mark 6px long (-3 to 3)
ctx.moveTo(-grid_size*i+0.5, -3);
ctx.lineTo(-grid_size*i+0.5, 3);
ctx.stroke();

// Text value at that point
ctx.font = '9px Arial';
ctx.textAlign = 'end';
ctx.fillText(-x_axis_starting_point.number*i + x_axis_starting_point.suffix, -grid_size*i+3, 15);
}

// Ticks marks along the negative Y-axis
for(i=1; i<( x_axis_distance_grid_lines); i++) {
ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = "#000000";

// Draw a tick mark 6px long (-3 to 3)
ctx.moveTo(-3, grid_size*i+0.5);
ctx.lineTo(3, grid_size*i+0.5);
ctx.stroke();

// Text value at that point
ctx.font = '9px Arial';
ctx.textAlign = 'start';
ctx.fillText(-y_axis_starting_point.number*i + y_axis_starting_point.suffix, 8, grid_size*i+3);
}

// Ticks marks along the positive Y-axis
for(i=1; i<(num_lines_x - x_axis_distance_grid_lines); i++) {
ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = "#000000";

// Draw a tick mark 6px long (-3 to 3)
ctx.moveTo(-3, -grid_size*i+0.5);
ctx.lineTo(3, -grid_size*i+0.5);
ctx.stroke();

// Text value at that point
ctx.font = '9px Arial';
ctx.textAlign = 'start';
ctx.fillText(y_axis_starting_point.number*i + y_axis_starting_point.suffix, 8, -grid_size*i+3);
// ctx.beginPath();
// ctx.arc(2*grid_size, -4*grid_size, 3, 0, 2 * Math.PI);
// ctx.fill();
// ctx.moveTo(-10*grid_size, 20*grid_size);
// ctx.lineTo(5*grid_size, -10*grid_size);

// Draw the Path
ctx.stroke();

}


function getMatrixRank(matrix) {
  // Use linear algebra library or implement rank calculation algorithm here
  // For simplicity, assuming a basic algorithm for rank calculation
  const rows = matrix.length;
  const cols = matrix[0].length;
  let rank = Math.min(rows, cols);

  for (let r = 0; r < rows; r++) {
    let nonzero = false;
    for (let c = 0; c < cols; c++) {
      if (matrix[r][c] !== 0) {
        nonzero = true;
        break;
      }
    }
    if (!nonzero) {
      rank--;
    }
  }

  return rank;
}

function lmeqe() {

  if (!formSubmitted) {
            alert("Please enter and submit all the values.");
            return;
        }

    let  a = parseInt(document.getElementById("a").value);
    let  b = parseInt(document.getElementById("b").value);
    let  c = parseInt(document.getElementById("c").value);
    let  b1 = parseInt(document.getElementById("b1").value); 
    let  d = parseInt(document.getElementById("d").value);
    let  e = parseInt(document.getElementById("e").value);
    let  f = parseInt(document.getElementById("f").value);
    let  b2 = parseInt(document.getElementById("b2").value);

    // document.getElementById('te1').innerHTML = "T((1,0,0)) = " +a+ "(1, 0) + " +d+ "(0, 1)  <br>T((0,1,0)) = " +b+ "(1, 0) + " +e+ "(0, 1)  <br>T((0,0,1)) = " +c+ "(1, 0) + " +f+ "(0, 1)" ;
    //  document.getElementById('ty').innerHTML = "T(y) = b <br> T(y) = (" +a+ "y<sub>1</sub> + " +b+  "y<sub>2</sub> + "+c+ " y<sub>3</sub> ) , (" +d+ "y<sub>1</sub> + " +e+  "y<sub>2</sub> + "+f+ " y<sub>3</sub> ) ";
    //document.getElementById("eqncons").innerHTML ="T(y) = b <br> b = ("+b1+", "+ b2+")"; 
    // document.getElementById("eqncons").innerHTML="Rank A = Rank A<sup>+</sup>";
    const matrix = [
    [parseFloat(document.getElementById('a').value), parseFloat(document.getElementById('b').value), parseFloat(document.getElementById('c').value)],
    [parseFloat(document.getElementById('d').value), parseFloat(document.getElementById('e').value), parseFloat(document.getElementById('f').value)]
  ];
  const matrix2 = [
    [parseFloat(document.getElementById('a').value), parseFloat(document.getElementById('b').value), parseFloat(document.getElementById('c').value), parseFloat(document.getElementById('b1').value)],
    [parseFloat(document.getElementById('d').value), parseFloat(document.getElementById('e').value), parseFloat(document.getElementById('f').value), parseFloat(document.getElementById('b2').value)]
  ];

  const rank = getMatrixRank(matrix);
  const rank2 = getMatrixRank(matrix2);
  var isValid = true;
    var inputs = document.getElementsByClassName("eqn");
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            isValid = false;
            break;
        }
    }

    // Display alert if any input is empty
    if (!isValid) {
        alert("Please enter and submit all the values.");
    } else {
  document.getElementById('rankres').innerHTML = `<span style='padding-left: 2rem;'>Rank A = ${rank} </span> <br><span style='padding-left: 2rem;'>Rank A<sup>+</sup> = ${rank2}</span>`;
  
  
  //document.getElementById('rankres2').innerHTML = `Rank A<sup>+</sup> = ${rank2}`;
  if(rank == rank2) {
    document.getElementById("consres").innerHTML="<span style='padding-left: 2rem;'>Rank A = Rank A<sup>+</sup></span> <br><span style='margin-left: 2rem; border:1.5px solid green; padding-left: 0.2rem; padding-right:0.2rem; margin-top:1rem;'> System is <span style='background-color:yellow;'> consistent</span></span>";
    
  }
  else{
    document.getElementById("consres").innerHTML="<span style='padding-left: 2rem;'>Rank A &ne; Rank A<sup>+</sup></span><br><span style=' margin-left: 2rem; border:1.5px solid red; padding-left: 0.2rem; padding-right:0.2rem;'>System is <span style='background-color:yellow;'>inconsistent</span> </span>";
  }}
    // document.getElementById("note").innerHTML="&#8658; b &isin; RangeT <br> Linear map equation (T(y)) is consistent";
    // ctx.beginPath();
    // ctx.arc(a*grid_size, -d*grid_size, 3, 0, 2 * Math.PI);
 
    // ctx.fillStyle = "red";
    // ctx.fill();
    // ctx.beginPath();
    
    // ctx.arc(b*grid_size, -e*grid_size, 3, 0, 2 * Math.PI);
    // ctx.fillStyle = "red";
    // ctx.fill();

    // ctx.beginPath();
    // ctx.arc(c*grid_size, -f*grid_size, 3, 0, 2 * Math.PI);
    // ctx.fillStyle = "red";
    // ctx.fill();

    // ctx.beginPath();
    // ctx.arc(b1*grid_size, -b2*grid_size, 3, 0, 2 * Math.PI);
    // ctx.fillStyle = "black";
    // ctx.fill();
    // document.getElementById("illustration").style.display="block";
    //document.getElementById("my-canvas").style.display="block";
   

}


function illustration() {

if (!formSubmitted) {
            alert("Please enter and submit all the values.");
            return;
        }
  
  let  a = parseInt(document.getElementById("a").value);
  let  b = parseInt(document.getElementById("b").value);
  let  c = parseInt(document.getElementById("c").value);
  let  b1 = parseInt(document.getElementById("b1").value); 
  let  d = parseInt(document.getElementById("d").value);
  let  e = parseInt(document.getElementById("e").value);
  let  f = parseInt(document.getElementById("f").value);
  let  b2 = parseInt(document.getElementById("b2").value);
  const matrix = [
    [parseFloat(document.getElementById('a').value), parseFloat(document.getElementById('b').value), parseFloat(document.getElementById('c').value)],
    [parseFloat(document.getElementById('d').value), parseFloat(document.getElementById('e').value), parseFloat(document.getElementById('f').value)]
  ];
  const matrix2 = [
    [parseFloat(document.getElementById('a').value), parseFloat(document.getElementById('b').value), parseFloat(document.getElementById('c').value), parseFloat(document.getElementById('b1').value)],
    [parseFloat(document.getElementById('d').value), parseFloat(document.getElementById('e').value), parseFloat(document.getElementById('f').value), parseFloat(document.getElementById('b2').value)]
  ];

  const rank = getMatrixRank(matrix);
  const rank2 = getMatrixRank(matrix2);
  var isValid = true;
    var inputs = document.getElementsByClassName("eqn");
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            isValid = false;
            break;
        }
    }

    // Display alert if any input is empty
    if (!isValid) {
        alert("Please enter and submit all the values.");
    } else {
// Display the result
//document.getElementById("calcbtn2").style.display="block";
document.getElementById('result').innerHTML = "<span style='padding-left: 1rem;'>AX = B, where</span>" ;
document.getElementById("mat3").innerHTML ="\\[ A = \\begin{pmatrix} "+a+" & "+b+" &  "+ c +" \\\\"  + d+"&" + e+"&"+   f + "\\end{pmatrix},  X =  \\begin{pmatrix} x &#8321; \\\\ x &#8322; \\\\ x &#8323; \\end{pmatrix} ,  B = \\begin{pmatrix}  "+b1+" \\\\"  + b2+" \\end{pmatrix} \\]";
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
    document.getElementById('result2').innerHTML = "<span style='padding-left: 1rem;'><b>Linear map associated with A : </b> </span><br><span style='padding-left: 2rem;'><ul><li>To define the desired linear map T:R<sup>3</sup>&rarr; R<sup>2</sup></li><li>B<sub>1</sub> = {(1,0,0), (0,1,0), (0,0,1)} for R<sup>3</sup>, B<sub>2</sub> = {(1,0), (0,1)} for R<sup>2</sup></span></li></ul>" ;
    document.getElementById('te1').innerHTML = "<span style='padding-left: 2rem;'><ul><li>T((1,0,0)) = " +a+ "(1, 0) + " +d+ "(0, 1) </span><br><span style='padding-left: 0rem;'>T((0,1,0)) = " +b+ "(1, 0) + " +e+ "(0, 1) </span><br><span style='padding-left: 0rem;'>T((0,0,1)) = " +c+ "(1, 0) + " +f+ "(0, 1)</li></ul></span>" ;
   document.getElementById('ty').innerHTML = "<span style='padding-left: 2rem;'><ul><li>T(y) = (" +a+ "y<sub>1</sub> + " +b+  "y<sub>2</sub> + "+c+ "y<sub>3</sub>, " +d+ "y<sub>1</sub> + " +e+  "y<sub>2</sub> + "+f+ "y<sub>3</sub>);<br> y = (y<sub>1</sub>, y<sub>2</sub>, y<sub>3</sub>) &isin; R<sub>3</sub></li></ul></span>";
   document.getElementById('ty1').innerHTML= "<span style='padding-left: 1rem;'><b>Equivalent Linear Map Equation & its Consistency: </b>T(y) = b</span><br><span style='padding-left: 2rem;'>b = ("+b1+", "+b2+") &isin; R<sup>2</sup></span>";
   
//document.getElementById("note").innerHTML="&#8658; b &isin; RangeT <br> Linear map equation (T(y)) is consistent";
if(rank == rank2) {
    document.getElementById("note1").innerHTML="<span style='padding-left: 2rem;'><ul><li><span style='border: 2px solid green; background-color:yellow; padding: 0.2rem 0.2rem;'>b &isin; RangeT </span></li></ul> </span>";
    document.getElementById("note").innerHTML="<span style='padding-left: 2rem;'><ul><li> Linear map equation T(y) is <span style='background-color:yellow;'> consistent </span>/inconsistent </li></ul></span><br><br><span style=' font-size:2rem; padding-left: 1rem;'><b>Consistency of the chosen system of linear equation: </b></span>";
    document.getElementById("finalres").innerHTML="<span style='border:1.5px solid green;  text-align:center; margin-left:2rem; margin-right:2rem; justify-content:center; display:block; font-weight: bold; padding-left: 0.5rem; padding-right:0.5rem; color: green;'>CONSISTENT</span>";
}
  else{
    document.getElementById("note1").innerHTML="<span style='padding-left: 2rem;'><ul><li> <span style='border: 2px solid red; vbackground-color:yellow; padding: 0.2rem 0.2rem;'>b &notin; RangeT </span></li></ul></span>";
    document.getElementById("note").innerHTML="<span style='padding-left: 2rem;'><ul><li>Linear map equation T(y) is consistent/<span style='background-color:yellow;'> inconsistent </span></li></ul></span><br><br><span style=' font-size:2rem; padding-left: 1rem;'><b>Consistency of the chosen system of linear equation: </b></span>";
    document.getElementById("finalres").innerHTML="<span style='border:1.5px solid red; text-align:center; margin-left:2rem; margin-right:2rem; justify-content:center; display:block; font-weight: bold; margin-top: 2rem; padding-left: 0.5rem; padding-right:0.5rem; color:red; '>INCONSISTENT</span>"
}


    ctx.beginPath();
    ctx.arc(a*grid_size, -d*grid_size, 3, 0, 2 * Math.PI);
 
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.beginPath();
    
    ctx.arc(b*grid_size, -e*grid_size, 3, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(c*grid_size, -f*grid_size, 3, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(b1*grid_size, -b2*grid_size, 3, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();

   document.getElementById("my-canvas").style.display="block";
   document.getElementById("pnote").innerHTML="<span style='color:blue; font-size: 1rem; '><b>Note:</b> Red points represent T(1, 0, 0), T(0, 1, 0) and T(0, 0, 1) and black point represents b</span>";
   document.getElementById('ty2').innerHTML="<b>Consistency of the chosen system of linear equation: </b><br>"
    
}
}
