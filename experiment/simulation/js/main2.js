

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
 
    


      
        const a = localStorage.getItem("a");
        const b = localStorage.getItem("b");
        const c = localStorage.getItem("c");
        const d = localStorage.getItem("d");
        const e = localStorage.getItem("e");
        const f = localStorage.getItem("f");
        const b1 = localStorage.getItem("b1");
        const b2 = localStorage.getItem("b2");
        const matrix = localStorage.getItem("matrix");
        const matrix2 = localStorage.getItem("matrix2");
        const rank = localStorage.getItem("rank");
        const rank2 = localStorage.getItem("rank2");
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
   
        document.getElementById('result2').innerHTML = "<span style='padding-left: 1rem; font-size:28px;'><b>&#10148; Equivalent linear map equation:</b> </span><br><span style='padding-left: 2rem;'><ul style='padding-left: 4rem;'><p style=margin-left:27%>T(y) = b </p> where  T:R<sup>3</sup>&rarr; R<sup>2</sup> is the linear transformation associated with the matrix A with respect to the basis B<sub>1</sub> = {(1,0,0), (0,1,0), (0,0,1)} for R<sup>3</sup>, B<sub>2</sub> = {(1,0), (0,1)} for R<sup>2</sup> and b = ( "+b1+", "+b2+" ) &isin; R<sup>2</sup></span></li><p>[ Precisely T:R<sup>3</sup>&rarr; R<sup>2</sup> is given by </p></ul>" ;
        document.getElementById('te1').innerHTML = "<ul style='padding-left: 4rem;'><li>T((1,0,0)) = " +a+ "(1, 0) + " +d+ "(0, 1) = ("+a+","+d+") </span><br><span style='padding-left: 0rem;'>T((0,1,0)) = " +b+ "(1, 0) + " +e+ "(0, 1) = ("+b+","+e+")</span><br><span style='padding-left: 0rem;'>T((0,0,1)) = " +c+ "(1, 0) + " +f+ "(0, 1)= ("+c+","+f+")</li></ul>" ;
       document.getElementById('ty').innerHTML = "<ul style='padding-left: 4rem;'><li>T(y) = (" +a+ "y<sub>1</sub> + " +b+  "y<sub>2</sub> + "+c+ "y<sub>3</sub>, " +d+ "y<sub>1</sub> + " +e+  "y<sub>2</sub> + "+f+ "y<sub>3</sub>);  y = (y<sub>1</sub>, y<sub>2</sub>, y<sub>3</sub>) &isin; R<sub>3</sub> ]</li></ul>";
       document.getElementById('ty1').innerHTML= "<span style='padding-left: 1rem;font-size:28px;'><b>&#10148; Consistency of linear map equation: </b>&emsp;&emsp;<ul style='padding-left: 4rem; padding-top:14px; font-size:23px;'><li><b>Range T: </b><span id='consis'></span></li><li style='margin-bottom:5px;'><b>Consistency: </b><span id='consis2'></span></li></ul><p style='font-size:20px; color:blue; padding-left:4rem; margin:3px;'>(See the diagram below)</p></span>";
       
       
    //document.getElementById("note").innerHTML="&#8658; b &isin; RangeT <br> Linear map equation (T(y)) is consistent";
    if(rank == rank2) {
        document.getElementById("consis").innerHTML="<span style='border: 1.5px solid green; background-color:yellow; padding: 0rem 0.2rem;'> b &isin; RangeT</span>";
        document.getElementById("consis2").innerHTML="<span style='border: 1.5px solid green; background-color:yellow; padding: 0rem 0.2rem;'>Consistent</span>";
        document.getElementById("note3").innerHTML="<b style='padding-left:1rem; font-size:29px'>&#10148; Consistency of system of linear equations:</b> <br><span style='padding-left: 5rem;'>Following are equivalent<span> <br><ul style='padding-left:8rem;'><li>Linear map equation is consistent </li><li>Matrix equation is consistent </li><li>System of linear equation is consistent</li></ul></span>";
        document.getElementById('eql_ME').innerHTML = "<b style='padding-left:1rem; font-size:28px'>&#10148;  Equivalent matrix equation:</b> <br><p style='padding-left: 5rem; margin-left:30%; padding:0;'>AX = B</p><br><p style='padding-left: 5rem; margin:0;'>where</p>" ;
        document.getElementById("mat3").innerHTML =" \\[ A = \\begin{pmatrix} "+a+" & "+b+" &  "+ c +" \\\\"  + d+"&" + e+"&"+   f + "\\end{pmatrix},  X =  \\begin{pmatrix} x &#8321; \\\\ x &#8322; \\\\ x &#8323; \\end{pmatrix} ,  B = \\begin{pmatrix}  "+b1+" \\\\"  + b2+" \\end{pmatrix} \\]";
        MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
        document.getElementById("note").innerHTML="<span style=' font-size:28px; padding-left: 1rem; background-color:lightgreen;'><b>&#10148; Consistency of Matrix Equation and the Chosen System of Linear Equations:</b></span>";
        document.getElementById("finalres").innerHTML="<span style='border:1.5px solid green;  text-align:center; margin-left:2rem; margin-right:2rem; justify-content:center; display:block; font-weight: bold; padding-left: 0.5rem; padding-right:0.5rem; color: Black; background-color:yellow;'>CONSISTENT</span>";
    }
      else{
        document.getElementById("consis").innerHTML="<span style='border: 1.5px solid green; background-color:yellow; padding: 0rem 0.2rem;'> b &notin; RangeT</span>";
        document.getElementById("consis2").innerHTML="<span style='border: 1.5px solid green; background-color:yellow; padding: 0rem 0.2rem;'>Inconsistent</span>";
        document.getElementById("note3").innerHTML="<b style='padding-left:1rem; font-size:28px'>&#10148; Consistency of system of linear equations:</b><span style='padding-left: 5rem;'>Following are equivalent<span> <br><ul><li>Linear map equation is consistent </li><li>Matrix equation is consistent </li><li>Linear map equation is consistent</li></ul></span>";
        document.getElementById('eql_ME').innerHTML = "<b style='padding-left:1rem; font-size:28px'>&#10148;  Equivalent matrix equation:</b> <br><span style='padding-left: 5rem;'>AX = B, where</span>" ;
        document.getElementById("mat3").innerHTML ="\\[ A = \\begin{pmatrix} "+a+" & "+b+" &  "+ c +" \\\\"  + d+"&" + e+"&"+   f + "\\end{pmatrix},  X =  \\begin{pmatrix} x &#8321; \\\\ x &#8322; \\\\ x &#8323; \\end{pmatrix} ,  B = \\begin{pmatrix}  "+b1+" \\\\"  + b2+" \\end{pmatrix} \\]";
        MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
        document.getElementById("note").innerHTML="<span style=' font-size:28px; padding-left: 1rem;'><b>&#10148; Consistency of Matrix Equation and the Chosen <span style='background-color:yellow;''>System of Linear Equations</span>: </b></span>";
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

  
