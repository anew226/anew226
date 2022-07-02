let calcDivs = document.querySelectorAll(".calculations div");
let selector = document.querySelector("select");
let unitDescr = document.querySelectorAll(".unitDescriptions h2");

document.querySelector("#home").addEventListener("click", function() {
    // clears calculations divs
    for (i = 0; i < calcDivs.length; i++) {
        calcDivs[i].style.display = "none";
    }
    // sets home calculations divs placeholders
    calcDivs[9].style.display = "inline-block";
    calcDivs[10].style.display = "inline-block";
    calcDivs[11].style.display = "inline-block";
    // sets selector value to default 0
    selector.value = 0;
    for (j = 0; j < unitDescr.length; j++) {
        unitDescr[j].style.display = "none";
    }
    unitDescr[0].style.display = "block"
});

document.querySelector("#clear").addEventListener("click", function() {
    // clears calculator inputs
    let clearInputs = document.querySelectorAll("input");
    clearInputs.forEach(function(el) {
        el.value = " ";
    });
    let clearSpans = document.querySelectorAll("span");
    clearSpans.forEach(function (el) {
        el.innerHTML = "____";
    });
    document.getElementById("graph_draw").innerHTML = "&#9711;&#9711;&#9711;&#9711;&#9711;--&#9711;&#9711;&#9711;&#9711;&#9711;";
});

function unitSelection(value) {
    if (value === "31073") {
        // clears calculations divs
        for (i = 0; i < calcDivs.length; i++) {
            calcDivs[i].style.display = "none";
        }
        // sets calculations divs for 31073
        calcDivs[0].style.display = "inline-block";
        calcDivs[1].style.display = "inline-block";
        calcDivs[3].style.display = "inline-block";
        // sets unit Description h2
        for (j = 0; j < unitDescr.length; j++) {
            unitDescr[j].style.display = "none";
        }
        unitDescr[1].style.display = "block"
    } else if (value === "31077") {
        // clears calculations divs
        for (i = 0; i < calcDivs.length; i++) {
            calcDivs[i].style.display = "none";
        }
        // sets calculations divs for 31077
        calcDivs[0].style.display = "inline-block";
        calcDivs[1].style.display = "inline-block";
        calcDivs[2].style.display = "inline-block";
        // sets unit Description h2
        for (j = 0; j < unitDescr.length; j++) {
            unitDescr[j].style.display = "none";
        }
        unitDescr[2].style.display = "block"
    } else if (value === "282700") {
        // clears calculations divs
        for (i = 0; i < calcDivs.length; i++) {
            calcDivs[i].style.display = "none";
        }
        // sets calculations divs for 282700
        calcDivs[4].style.display = "inline-block";
        calcDivs[8].style.display = "inline-block";
        // sets unit Description h2
        for (j = 0; j < unitDescr.length; j++) {
            unitDescr[j].style.display = "none";
        }
        unitDescr[3].style.display = "block"
    } else if (value === "282800") {
        // clears calculations divs
        for (i = 0; i < calcDivs.length; i++) {
            calcDivs[i].style.display = "none";
        }
        // sets calculations divs for 282800
        calcDivs[5].style.display = "inline-block";
        calcDivs[8].style.display = "inline-block";
        // sets unit Description h2
        for (j = 0; j < unitDescr.length; j++) {
            unitDescr[j].style.display = "none";
        }
        unitDescr[4].style.display = "block"
    } else if (value === "282900") {
        // clears calculations divs
        for (i = 0; i < calcDivs.length; i++) {
            calcDivs[i].style.display = "none";
        }
        // sets calculations divs for 282900
        calcDivs[6].style.display = "inline-block";
        calcDivs[8].style.display = "inline-block";
        // sets unit Description h2
        for (j = 0; j < unitDescr.length; j++) {
            unitDescr[j].style.display = "none";
        }
        unitDescr[5].style.display = "block"
    } else if (value === "283200") {
        // clears calculations divs
        for (i = 0; i < calcDivs.length; i++) {
            calcDivs[i].style.display = "none";
        }
        // sets calculations divs for 283200
        calcDivs[7].style.display = "inline-block";
        calcDivs[8].style.display = "inline-block";
        // sets unit Description h2
        for (j = 0; j < unitDescr.length; j++) {
            unitDescr[j].style.display = "none";
        }
        unitDescr[6].style.display = "block"
    } 
}

function speedCalc() {
    var stroke = Number(document.getElementById("stroke").value);
    var time = Number(document.getElementById("time").value);
    document.getElementById("displayStroke").innerHTML = stroke.toFixed(3);

    var speed = stroke / time;
    speed = Math.round(speed * 1000) / 1000;

    var speedmm = speed * 25.4;
    speedmm = Math.round(speedmm * 100) / 100;

    if (stroke == 0 || time == 0) {
        document.getElementById("displaySpeedin").innerHTML = "____";
        document.getElementById("displaySpeedmm").innerHTML = "____";      
    } else {
        document.getElementById("displaySpeedin").innerHTML = speed;
        document.getElementById("displaySpeedmm").innerHTML = speedmm;           
    }
}

function gain() {
    var u1 = Number(document.getElementById("u1").value);
    var u2 = Number(document.getElementById("u2").value);

    var r2 = (u1 - u2) / (u1 + u2);
    r2 = Math.round(r2 * 10000) / 10000;

    if (u1 == 0 || u2 == 0) {
        document.getElementById("displayR2").innerHTML = "";
    } else {
        document.getElementById("displayR2").innerHTML = r2;
    }
}

function sealFriction() {
    var p1 = Number(document.getElementById("p1").value);

    var fp1 = (135/57.3)*p1;
    fp1 = Math.round(fp1 * 100) / 100;

    document.getElementById("displayFP1").innerHTML = fp1;

    var p2 = Number(document.getElementById("p2").value);

    var fp2 = (146/46.7)*p2;
    fp2 = Math.round(fp2 * 100) / 100;

    document.getElementById("displayFP2").innerHTML = fp2;
}

function kDamping() {
    var force = Number(document.getElementById("force").value);
    var time = Number(document.getElementById("timeDC").value);
    var stroke = Number(document.getElementById("stroke").value);

    var speed = stroke / time;
    var K = force / (speed * speed);
    K = Math.round(K * 100) / 100;

    if (stroke == 0 || force == 0 || time == 0) {
        document.getElementById("displayKDamping").innerHTML = "___";
        if (stroke == 0) {
            document.getElementById("stroke").style.background = "yellow";
            document.getElementById("stroke_C").style.background = "yellow";
        } else {
            document.getElementById("stroke").style.background = "";
            document.getElementById("stroke_C").style.background = "";    
        }
    } else {
        document.getElementById("displayKDamping").innerHTML = K;
    }
}

// ============================
// == null adjustment 282700 ==
// Reference Null Adjustments-Table 1002
const tooth_282700 = [
    0.102,
    0.204,
    -0.185,
    -0.083,
    0.019,
    0.120,
    0.222,
    -0.167,
    -0.065,
    0.037,
    0.139,
    0.241,
    -0.148,
    -0.046,
    0.056,
    0.157,
    -0.232,
    -0.130,
    -0.028,
    0.074,
    0.176,
    -0.213,
    -0.111,
    -0.009,
    0.093,
    0.194,

    -0.194,
    -0.093,
    0.009,
    0.111,
    0.213,
    -0.176,
    -0.074,
    0.028,
    0.130,
    0.232,
    -0.157,
    -0.056,
    0.046,
    0.148,
    -0.241,
    -0.139,
    -0.037,
    0.065,
    0.167,
    -0.222,
    -0.120,
    -0.019,
    0.083,
    0.185,
    -0.204,
    -0.102,
    0.000 
];

// finds largest positive number in array
var largestNum_282700 = 0;

for (let i = 0; i < tooth_282700.length; i++ ) {
    
    if (largestNum_282700 < tooth_282700[i]) {
        largestNum_282700 = tooth_282700[i];
    }
}

// finds which tooth collar is currently on (based on measurement input) and gives instructions for adjustment
function nullAdjust_282700() {

    // takes user input
    let deviation = Number(document.getElementById("devNull_282700").value);

    // sets current tooth for graph
    var currentTooth = 0;

    // iterate over tooth_282700 array
    for (let i = 0; i < tooth_282700.length; i++ ) {

        // calculates difference between user input and each tooth
        let deviationCalc = Number(parseFloat(deviation - tooth_282700[i]).toFixed(3));

        // for close calls, these variables help find closest tooth
        var prev = (deviation - 0.003) - tooth_282700[i],
            next = (deviation + 0.003) - tooth_282700[i],
            prevTooth,
            nextTooth,
            prevToothVal,
            nextToothVal;

        // for clase calls, finds "previous tooth"
        if (prev >= -0.004 && prev <= 0.004) {
            prevTooth = (i + 1);
            prevToothVal = tooth_282700[i];
        }

        // for close calls, finds "next tooth"
        if (next >= -0.004 && next <= 0.004) {
            nextTooth = (i + 1);
            nextToothVal = tooth_282700[i];
        }

        // for close calls, fixes JS rounding issues
        let numPrev = Math.abs(prevToothVal - deviation),
            roundPrev = Number(parseFloat(numPrev).toFixed(3)),
            numNext = Math.abs(nextToothVal - deviation),
            roundNext = Number(parseFloat(numNext).toFixed(3));        

        // displays to user currentTooth, adjustemnts, and deviation of tooth
        if (currentTooth !== "Between Teeth?") {
            document.getElementById("displayTooth_282700").innerHTML = currentTooth;
            document.getElementById("displayAdjust_282700_1").innerHTML = "move collar " + (tooth_282700.length - currentTooth) + " teeth CW,";
            document.getElementById("displayAdjust_282700_2").innerHTML = "or "+ currentTooth + " teeth CCW";
        } else {
            document.getElementById("displayTooth_282700").innerHTML = "Unable to calculate current tooth: Measurement is 'between' teeth. Try measuring again.";
        }

        // checks if null is within CMM limits
        if (deviation >= -0.007 && deviation <= 0.007) {
            currentTooth = (i + 1);
            document.getElementById("displayTooth_282700").innerHTML = tooth_282700.length;
            document.getElementById("displayAdjust_282700_1").innerHTML = "**";
            document.getElementById("displayAdjust_282700_2").innerHTML = " ";
        // if deviation exceeds 0 by -0.007 or +0.007, finds tooth number & advises adjustment
        } else if (deviationCalc == 0) {
            currentTooth = (i + 1);
            document.getElementById("accuracy").innerHTML = "&#10032;&#10032;&#10032;&#10032;&#10032;"
        } else if (deviationCalc >= -0.001 && deviationCalc <= 0.001) {
            currentTooth = (i + 1);
            document.getElementById("accuracy").innerHTML = "&#10032;&#10032;&#10032;&#10032;"
        } else if (deviationCalc >= -0.002 && deviationCalc <= 0.002) {
            currentTooth = (i + 1);
            document.getElementById("accuracy").innerHTML = "&#10032;&#10032;&#10032;"
        } else if (deviationCalc >= -0.003 && deviationCalc <= 0.003) {
            currentTooth = (i + 1);
            document.getElementById("accuracy").innerHTML = "&#10032;&#10032;"
        } 
        else if (deviationCalc >= -0.004 && deviationCalc <= 0.004) {
            currentTooth = (i + 1);
            document.getElementById("accuracy").innerHTML = "&#10032;"
        } 
        else if (deviationCalc >= -0.005 && deviationCalc <= 0.005) {
            if ((roundPrev) < (roundNext)) {
                currentTooth = prevTooth;
            } else if ((roundPrev) > (roundNext)) {
                currentTooth = nextTooth;
            } else if (prevTooth !== nextTooth && roundPrev === roundNext) {
                currentTooth = "Between Teeth?";
                document.getElementById("accuracy").innerHTML = "";
                document.getElementById("currToothDeviation").innerHTML = "Between Teeth"
                document.getElementById("graph_draw").innerHTML = prevTooth + "&#9711;&#9711;&#9711;&#9711;"+"??"+"&#9711;&#9711;&#9711;&#9711;" + nextTooth;
                document.getElementById("displayAdjust_282700_1").innerHTML = "___";
                document.getElementById("displayAdjust_282700_2").innerHTML = " ";
            }
        // if measured deviation is greater than array's largest numbers (positive or negative),
        // instructs technician to recheck input lever's adjustment as per CMM
        } else if (Math.abs(deviation) > largestNum_282700 + 0.003) {
            prevTooth = "??";
            nextTooth = "??";
            if (Math.abs(deviation) > largestNum_282700 + 0.004) {
                document.getElementById("accuracy").innerHTML = "";
                document.getElementById("currToothDeviation").innerHTML = "unknown"
                document.getElementById("displayTooth_282700").innerHTML = "unknown";
                document.getElementById("graph_draw").innerHTML = "&#9711;&#9711;&#9711;&#9711;&#9711;"+"??"+"&#9711;&#9711;&#9711;&#9711;&#9711;";
                document.getElementById("displayAdjust_282700_1").innerHTML = "check input lever for proper adjustment. Refer to assembly section.";
                document.getElementById("displayAdjust_282700_2").innerHTML = " ";
            }
        }
    }

    // *********************************************
    // Draws graph for 'Measurement Accuracy' box
    // calculate deviation of current tooth from null
    let currToothVal = tooth_282700[currentTooth - 1];

    // displays current tooth deviation from null
    if (currToothVal) {
        document.getElementById("currToothDeviation").innerHTML = "Tooth " + currentTooth + ": deviation from Null = " + currToothVal.toFixed(3); 
    }

    // Fixes JS rounding issues
    let num = deviation - currToothVal,
        rounded = Number(parseFloat(num).toFixed(3));

    // draws 'graph' in 'Measurement Accuracy' box
    if (rounded === 0.000 ) {
        document.getElementById("graph_draw").innerHTML = "&#9711;&#9711;&#9711;&#9711;&#9711;"+currentTooth+"&#9711;&#9711;&#9711;&#9711;&#9711;";
    } else if (rounded === 0.001) {
        document.getElementById("graph_draw").innerHTML = "&#9711;&#9711;&#9711;&#9711;"+currentTooth+"&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;";
    } else if (rounded === 0.002) {
        document.getElementById("graph_draw").innerHTML = "&#9711;&#9711;&#9711;"+currentTooth+"&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;";
    }
    else if (rounded === 0.003) {
        document.getElementById("graph_draw").innerHTML = "&#9711;&#9711;"+currentTooth+"&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;";
    } else if (rounded === 0.004) {
        document.getElementById("graph_draw").innerHTML = "&#9711;"+currentTooth+"&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;"+nextTooth;
    } else if (rounded === -0.004) {
        document.getElementById("graph_draw").innerHTML = prevTooth+"&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;"+currentTooth+"&#9711;";
    } else if (rounded === -0.003) {
        document.getElementById("graph_draw").innerHTML = "&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;"+currentTooth+"&#9711;&#9711;";
    } else if (rounded === -0.002) {
        document.getElementById("graph_draw").innerHTML = "&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;"+currentTooth+"&#9711;&#9711;&#9711;";
    }
    else if (rounded === -0.001) {
        document.getElementById("graph_draw").innerHTML = "&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;"+currentTooth+"&#9711;&#9711;&#9711;&#9711;";
    }
    // end of Draws graph for 'Measurement Accuracy' window
    // *********************************************
}
// == null adjustment 282700 end ==
// ================================


// ============================
// == null adjustment 282800 ==
// Reference Null Adjustments-Table 1002
const tooth_282800 = [
    -0.122,
    -0.245,
    0.222,
    0.100,
    -0.022,
    -0.144,
    -0.267,
    0.200,
    0.078,
    -0.044,
    -0.167,
    -0.289,
    0.178,
    0.056,
    -0.067,
    -0.189,
    0.278,
    0.156,
    0.033,
    -0.089,
    -0.211,
    0.256,
    0.133,
    0.011,
    -0.111,
    -0.233,

    0.233,
    0.111,
    -0.011,
    -0.133,
    -0.256,
    0.211,
    0.089,
    -0.033,
    -0.156,
    -0.278,
    0.189,
    0.067,
    -0.056,
    -0.178,
    0.289,
    0.167,
    0.044,
    -0.078,
    -0.200,
    0.267,
    0.144,
    0.022,
    -0.100,
    -0.222,
    0.245,
    0.122,
    0.000 
];

// finds largest positive number in array
var largestNum_282800 = 0;

for (let i = 0; i < tooth_282800.length; i++ ) {
    
    if (largestNum_282800 < tooth_282800[i]) {
        largestNum_282800 = tooth_282800[i];
    }
}

// finds which tooth collar is currently on and gives instructions for adjustment
function nullAdjust_282800() {

    // takes user input
    let deviation = Number(document.getElementById("devNull_282800").value);

    // sets current tooth for graph
    var currentTooth = 0;

    // iterate over tooth_282800 array
    for (let i = 0; i < tooth_282800.length; i++ ) {

        // calculates difference between user input and each tooth
        let deviationCalc = Number(parseFloat(deviation - tooth_282800[i]).toFixed(3));

        // for close calls, these variables help find closest tooth
        var prev = (deviation - 0.003) - tooth_282800[i],
            next = (deviation + 0.003) - tooth_282800[i],
            prevTooth,
            nextTooth,
            prevToothVal,
            nextToothVal;

        // for clase calls, finds "previous tooth"
        if (prev >= -0.004 && prev <= 0.004) {
            prevTooth = (i + 1);
            prevToothVal = tooth_282800[i];
        }

        // for close calls, finds "next tooth"
        if (next >= -0.004 && next <= 0.004) {
            nextTooth = (i + 1);
            nextToothVal = tooth_282800[i];
        }

        // for close calls, fixes JS rounding issues
        let numPrev = Math.abs(prevToothVal - deviation),
            roundPrev = Number(parseFloat(numPrev).toFixed(3)),
            numNext = Math.abs(nextToothVal - deviation),
            roundNext = Number(parseFloat(numNext).toFixed(3));        

        // displays to user currentTooth, adjustemnts, and deviation of tooth
        if (currentTooth !== "Between Teeth?") {
            document.getElementById("displayTooth_282800").innerHTML = currentTooth;
            document.getElementById("displayAdjust_282800_1").innerHTML = "move collar " + (tooth_282700.length - currentTooth) + " teeth CW,";
            document.getElementById("displayAdjust_282800_2").innerHTML = "or "+ currentTooth + " teeth CCW";
        } else {
            document.getElementById("displayTooth_282800").innerHTML = "Unable to calculate current tooth: Measurement is 'between' teeth. Try measuring again.";
        }

        // checks if null is within CMM limits
        if (deviation >= -0.010 && deviation <= 0.010) {
            currentTooth = (i + 1);
            document.getElementById("displayTooth_282800").innerHTML = tooth_282800.length;
            document.getElementById("displayAdjust_282800_1").innerHTML = "**";
            document.getElementById("displayAdjust_282800_2").innerHTML = " ";
        // if deviation exceeds 0 by -0.010 or +0.010, finds tooth number & advises adjustment
        } else if (deviationCalc == 0) {
            currentTooth = (i + 1);
            document.getElementById("accuracy").innerHTML = "&#10032;&#10032;&#10032;&#10032;&#10032;"
        } else if (deviationCalc >= -0.001 && deviationCalc <= 0.001) {
            currentTooth = (i + 1);
            document.getElementById("accuracy").innerHTML = "&#10032;&#10032;&#10032;&#10032;"
        } else if (deviationCalc >= -0.002 && deviationCalc <= 0.002) {
            currentTooth = (i + 1);
            document.getElementById("accuracy").innerHTML = "&#10032;&#10032;&#10032;"
        } else if (deviationCalc >= -0.003 && deviationCalc <= 0.003) {
            currentTooth = (i + 1);
            document.getElementById("accuracy").innerHTML = "&#10032;&#10032;"
        } else if (deviationCalc >= -0.004 && deviationCalc <= 0.004) {
            currentTooth = (i + 1);
            document.getElementById("accuracy").innerHTML = "&#10032;"
        } else if (deviationCalc >= -0.005 && deviationCalc <= 0.005) {
            currentTooth = (i + 1);
            document.getElementById("accuracy").innerHTML = ""
        } else if (deviationCalc >= -0.006 && deviationCalc <= 0.006) {
            if ((roundPrev) < (roundNext)) {
                currentTooth = prevTooth;
            } else if ((roundPrev) > (roundNext)) {
                currentTooth = nextTooth;
            } else if (prevTooth !== nextTooth && roundPrev === roundNext) {
                currentTooth = "Between Teeth?";
                document.getElementById("accuracy").innerHTML = "";
                document.getElementById("currToothDeviation").innerHTML = "Between Teeth"
                document.getElementById("graph_draw").innerHTML = prevTooth + "&#9711;&#9711;&#9711;&#9711;"+"??"+"&#9711;&#9711;&#9711;&#9711;" + nextTooth;
                document.getElementById("displayAdjust_282800_1").innerHTML = "___";
                document.getElementById("displayAdjust_282800_2").innerHTML = " ";
            }
        // if measured deviation is greater than array's largest numbers (positive or negative),
        // instructs technician to recheck input lever's adjustment as per CMM
        } else if (Math.abs(deviation) > largestNum_282800 + 0.004) {
            prevTooth = "??";
            nextTooth = "??";
            if (Math.abs(deviation) > largestNum_282800 + 0.005)
            document.getElementById("accuracy").innerHTML = "";
            document.getElementById("currToothDeviation").innerHTML = "unknown"
            document.getElementById("displayTooth_282800").innerHTML = "unknown";
            document.getElementById("graph_draw").innerHTML = "&#9711;&#9711;&#9711;&#9711;&#9711;"+"??"+"&#9711;&#9711;&#9711;&#9711;&#9711;";
            document.getElementById("displayAdjust_282800_1").innerHTML = "check input lever for proper adjustment. Refer to assembly section.";
            document.getElementById("displayAdjust_282800_2").innerHTML = " ";
        }
    }

    // *********************************************
    // Draws graph for 'Measurement Accuracy' box
    // calculate deviation of current tooth from null
    let currToothVal = tooth_282800[currentTooth - 1];

    // displays current tooth deviation from null
    if (currToothVal) {
        document.getElementById("currToothDeviation").innerHTML = "Tooth " + currentTooth + ": deviation from Null = " + currToothVal.toFixed(3); 
    }

    // Fixes JS rounding issues
    let num = deviation - currToothVal,
        rounded = Number(parseFloat(num).toFixed(3));

    // draws 'graph' in 'Measurement Accuracy' box
    if (rounded === 0.000 ) {
        document.getElementById("graph_draw").innerHTML = "&#9711;&#9711;&#9711;&#9711;&#9711;"+currentTooth+"&#9711;&#9711;&#9711;&#9711;&#9711;";
    } else if (rounded === 0.001) {
        document.getElementById("graph_draw").innerHTML = "&#9711;&#9711;&#9711;&#9711;&#9711;"+currentTooth+"&#9711;&#9711;&#9711;&#9711;&#9711;";
    } else if (rounded === 0.002) {
        document.getElementById("graph_draw").innerHTML = "&#9711;&#9711;&#9711;&#9711;"+currentTooth+"&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;";
    } else if (rounded === 0.003) {
        document.getElementById("graph_draw").innerHTML = "&#9711;&#9711;&#9711;"+currentTooth+"&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;";
    } else if (rounded === 0.004) {
        document.getElementById("graph_draw").innerHTML = "&#9711;&#9711;"+currentTooth+"&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;";
    } else if (rounded === 0.005) {
        document.getElementById("graph_draw").innerHTML = "&#9711;"+currentTooth+"&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;"+nextTooth;
    } else if (rounded === -0.005) {
        document.getElementById("graph_draw").innerHTML = prevTooth+"&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;"+currentTooth+"&#9711;";
    } else if (rounded === -0.004) {
        document.getElementById("graph_draw").innerHTML = "&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;"+currentTooth+"&#9711;&#9711;";
    } else if (rounded === -0.003) {
        document.getElementById("graph_draw").innerHTML = "&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;"+currentTooth+"&#9711;&#9711;&#9711;";
    } else if (rounded === -0.002) {
        document.getElementById("graph_draw").innerHTML = "&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;"+currentTooth+"&#9711;&#9711;&#9711;&#9711;";
    } else if (rounded === -0.001) {
        document.getElementById("graph_draw").innerHTML = "&#9711;&#9711;&#9711;&#9711;&#9711;"+currentTooth+"&#9711;&#9711;&#9711;&#9711;&#9711;";
    }
    // end of Draws graph for 'Measurement Accuracy' window
    // *********************************************
}
// == null adjustment 282800 end ==
// ================================


// null adjustment 282900 
// Reference Null Adjustments-Table 1002
const tooth_282900 = [
    0.076, 
    0.152, 
    -0.138, 
    -0.062,
    0.014,
    0.090,
    0.166,
    -0.124,
    -0.048,
    0.028,
    0.104,
    0.180,
    -0.111,
    -0.035,
    0.041,
    0.117,
    -0.173,
    -0.097,
    -0.021,
    0.055,
    0.131,
    -0.159,
    -0.083,
    -0.007,
    0.069,
    0.145,

    -0.145,    
    -0.069,
    0.007,
    0.083,
    0.159,
    -0.131,
    -0.055,
    0.021,
    0.097,
    0.173,
    -0.117,
    -0.041,
    0.035,
    0.111,
    -0.180,
    -0.104,
    -0.028,
    0.048,
    0.124,
    -0.166,
    -0.090,
    -0.014,
    0.062,
    0.138, 
    -0.152, 
    -0.076,
    0.000
];

// finds largest positive number in array
var largestNum_282900 = 0;

for (let i = 0; i < tooth_282900.length; i++) {
    
    if (largestNum_282900 < tooth_282900[i]) {
        largestNum_282900 = tooth_282900[i];
    }
}

// finds which tooth collar is currently on and gives instructions for adjustment
function nullAdjust_282900() {

    // takes user input
    let deviation = Number(document.getElementById("devNull_282900").value);

    // sets current tooth for graph
    var currentTooth = 0;

    // iterate over tooth_282900 array to find current tooth
    for (let i = 0; i < tooth_282900.length; i++ ) {

        // calculates difference between user input and each tooth
        let deviationCalc = Number(parseFloat(deviation - tooth_282900[i]).toFixed(3));

        // for close calls, these variables help find closest tooth
        var prev = (deviation - 0.003) - tooth_282900[i],
            next = (deviation + 0.003) - tooth_282900[i],
            prevTooth,
            nextTooth,
            prevToothVal,
            nextToothVal;

        // for clase calls, finds "previous tooth"
        if (prev >= -0.002 && prev <= 0.002) {
            prevTooth = (i + 1);
            prevToothVal = tooth_282900[i];
        }

        // for close calls, finds "next tooth"
        if (next >= -0.002 && next <= 0.002) {
            nextTooth = (i + 1);
            nextToothVal = tooth_282900[i];
        }

        // for close calls, fixes JS rounding issues
        let numPrev = Math.abs(prevToothVal - deviation),
            roundPrev = Number(parseFloat(numPrev).toFixed(3)),
            numNext = Math.abs(nextToothVal - deviation),
            roundNext = Number(parseFloat(numNext).toFixed(3));

        // displays to user currentTooth, adjustemnts, and deviation of tooth
        if (currentTooth !== "Between Teeth?") {
            document.getElementById("displayTooth_282900").innerHTML = currentTooth;
            document.getElementById("displayAdjust_282900_1").innerHTML = "move collar " + (tooth_282900.length - currentTooth) + " teeth CW,";
            document.getElementById("displayAdjust_282900_2").innerHTML = "or "+ currentTooth + " teeth CCW";
        } else {
            document.getElementById("displayTooth_282900").innerHTML = "Unable to calculate current tooth: Measurement is 'between' teeth. Try measuring again.";
        }
        
        // checks if null is within CMM limits
        if (deviation >= -0.005 && deviation <= 0.005) {
            currentTooth = (i + 1);
            document.getElementById("displayTooth_282900").innerHTML = tooth_282900.length;
            document.getElementById("displayAdjust_282900_1").innerHTML = "**";
            document.getElementById("displayAdjust_282900_2").innerHTML = " ";
        // if deviation exceeds Null by -0.005 or +0.005, finds tooth number & advises
        } else if (deviationCalc == 0) {
            currentTooth = (i + 1);
            document.getElementById("accuracy").innerHTML = "&#10032;&#10032;&#10032;&#10032;&#10032;"
        } else if (deviationCalc >= -0.001 && deviationCalc <= 0.001) {
            currentTooth = (i + 1);
            document.getElementById("accuracy").innerHTML = "&#10032;&#10032;&#10032;&#10032;"
        } else if (deviationCalc >= -0.002 && deviationCalc <= 0.002) {
            currentTooth = (i + 1);
            document.getElementById("accuracy").innerHTML = "&#10032;&#10032;&#10032;"
        } else if (deviationCalc >= -0.003 && deviationCalc <= 0.003) {
            currentTooth = (i + 1);
            document.getElementById("accuracy").innerHTML = "&#10032;"
        // for close calls, this logic finds current tooth
        } else if (deviationCalc >= -0.004 && deviationCalc <= 0.004) {
            if ((roundPrev) < (roundNext)) {
                currentTooth = prevTooth;
            } else if ((roundPrev) > (roundNext)) {
                currentTooth = nextTooth;
            } else if (prevTooth !== nextTooth && roundPrev === roundNext) {
                currentTooth = "Between Teeth?";
                document.getElementById("accuracy").innerHTML = "";
                document.getElementById("currToothDeviation").innerHTML = "Between Teeth"
                document.getElementById("graph_draw").innerHTML = prevTooth + "&#9711;&#9711;&#9711;&#9711;"+"??"+"&#9711;&#9711;&#9711;&#9711;" + nextTooth;
                document.getElementById("displayAdjust_282900_1").innerHTML = "___";
                document.getElementById("displayAdjust_282900_2").innerHTML = " ";             
            }
        // if measured deviation is greater than array's largest numbers (positive or negative),
        // instructs technician to recheck input lever's adjustment as per CMM
        } else if (Math.abs(deviation) > largestNum_282900 + 0.002) {
            prevTooth = "??";
            nextTooth = "??";
            if (Math.abs(deviation) > largestNum_282900 + 0.003) {
                document.getElementById("accuracy").innerHTML = "";
                document.getElementById("currToothDeviation").innerHTML = "unknown"
                document.getElementById("displayTooth_282900").innerHTML = "unknown";
                document.getElementById("graph_draw").innerHTML = "&#9711;&#9711;&#9711;&#9711;&#9711;"+"??"+"&#9711;&#9711;&#9711;&#9711;&#9711;";
                document.getElementById("displayAdjust_282900_1").innerHTML = "check input lever for proper adjustment. Refer to assembly section.";
                document.getElementById("displayAdjust_282900_2").innerHTML = " ";
            }
        }
    }

    // *********************************************
    // Draws graph for 'Measurement Accuracy' box
    // calculate deviation of current tooth from null
    let currToothVal = tooth_282900[currentTooth - 1];

    // displays current tooth deviation from null
    if (currToothVal) {
        document.getElementById("currToothDeviation").innerHTML = "Tooth " + currentTooth + ": deviation from Null = " + currToothVal.toFixed(3); 
    }

    // Fixes JS rounding issues
    let num = deviation - currToothVal,
        rounded = Number(parseFloat(num).toFixed(3));

    // draws 'graph' in 'Measurement Accuracy' box
    if (rounded === 0.000 ) {
        document.getElementById("graph_draw").innerHTML = "&#9711;&#9711;&#9711;&#9711;&#9711;"+currentTooth+"&#9711;&#9711;&#9711;&#9711;&#9711;";
    } else if (rounded === 0.001) {
        document.getElementById("graph_draw").innerHTML = "&#9711;&#9711;&#9711;&#9711;"+currentTooth+"&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;";
    } else if (rounded === 0.002) {
        document.getElementById("graph_draw").innerHTML = "&#9711;&#9711;&#9711;"+currentTooth+"&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;";
    } else if (rounded === 0.003) {
        document.getElementById("graph_draw").innerHTML = "&#9711;&#9711;"+currentTooth+"&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;"+nextTooth;
    } else if (rounded === -0.003) {
        document.getElementById("graph_draw").innerHTML = prevTooth+"&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;"+currentTooth+"&#9711;&#9711;";
    } else if (rounded === -0.002) {
        document.getElementById("graph_draw").innerHTML = "&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;"+currentTooth+"&#9711;&#9711;&#9711;";
    } else if (rounded === -0.001) {
        document.getElementById("graph_draw").innerHTML = "&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;"+currentTooth+"&#9711;&#9711;&#9711;&#9711;";
    }
    // end of Draws graph for 'Measurement Accuracy' window
    // *********************************************
}
// == null adjustment 282900 end ==
// ================================


// null adjustment 283200 
// Reference Null Adjustments-Table 1002
const tooth_283200 = [
    0.199,
    -0.073,
    0.126,
    -0.147,
    0.052,
    -0.220,
    -0.021,
    0.178,
    -0.094,
    0.105,
    -0.168,
    0.031,
    0.230,
    -0.042,
    0.157,
    -0.115,
    0.084,
    -0.189,
    0.010,
    0.209,
    -0.063,
    0.136,

    -0.136,
    0.063,
    -0.209,
    -0.010,
    0.189,
    -0.084,
    0.115,
    -0.157,
    0.042,
    -0.230,
    -0.031,
    0.168,
    -0.105,
    0.094,
    -0.178,
    0.021,
    0.220,
    -0.052,
    0.147,
    -0.126,
    0.073,
    -0.199,
    0.000
];

// finds largest positive number in array
var largestNum_283200 = 0;

for (let i = 0; i < tooth_283200.length; i++ ) {
    
    if (largestNum_283200 < tooth_283200[i]) {
        largestNum_283200 = tooth_283200[i];
    }
}

// finds which tooth collar is currently on and gives instructions for adjustment
function nullAdjust_283200() {

    // takes user input
    let deviation = Number(document.getElementById("devNull_283200").value);

    // sets current tooth for graph
    var currentTooth = 0;

    // iterate over tooth_283200 array
    for (let i = 0; i < tooth_283200.length; i++ ) {

        // calculates difference between user input and each tooth
        let deviationCalc = Number(parseFloat(deviation - tooth_283200[i]).toFixed(3));

        // for close calls, these variables help find closest tooth
        var prev = (deviation - 0.005) - tooth_283200[i],
            next = (deviation + 0.005) - tooth_283200[i],
            prevTooth,
            nextTooth,
            prevToothVal,
            nextToothVal;

        // for clase calls, finds "previous tooth"
        if (prev >= -0.004 && prev <= 0.004) {
            prevTooth = (i + 1);
            prevToothVal = tooth_283200[i];
        }

        // for close calls, finds "next tooth"
        if (next >= -0.004 && next <= 0.004) {
            nextTooth = (i + 1);
            nextToothVal = tooth_283200[i];
        }

        // for close calls, fixes JS rounding issues
        let numPrev = Math.abs(prevToothVal - deviation),
            roundPrev = Number(parseFloat(numPrev).toFixed(3)),
            numNext = Math.abs(nextToothVal - deviation),
            roundNext = Number(parseFloat(numNext).toFixed(3));  
            
        // displays to user currentTooth, adjustemnts, and deviation of tooth
        if (currentTooth !== "Between Teeth?") {
            document.getElementById("displayTooth_283200").innerHTML = currentTooth;
            document.getElementById("displayAdjust_283200_1").innerHTML = "move collar " + (tooth_283200.length - currentTooth) + " teeth CW,";
            document.getElementById("displayAdjust_283200_2").innerHTML = "or "+ currentTooth + " teeth CCW";
        } else {
            document.getElementById("displayTooth_283200").innerHTML = "Unable to calculate current tooth: Measurement is 'between' teeth. Try measuring again.";
        }

        // checks if null is within CMM limits
        if (deviation >= -0.007 && deviation <= 0.007) {
            currentTooth = (i + 1);
            document.getElementById("displayTooth_283200").innerHTML = tooth_283200.length;
            document.getElementById("displayAdjust_283200_1").innerHTML = "**";
            document.getElementById("displayAdjust_283200_2").innerHTML = " ";
        // if deviation exceeds 0 by -0.007 or +0.007, finds tooth number & advises adjustment
        } else if (deviationCalc == 0) {
            currentTooth = (i + 1);
            document.getElementById("accuracy").innerHTML = "&#10032;&#10032;&#10032;&#10032;&#10032;"
        } else if (deviationCalc >= -0.001 && deviationCalc <= 0.001) {
            currentTooth = (i + 1);
            document.getElementById("accuracy").innerHTML = "&#10032;&#10032;&#10032;&#10032;"
        } else if (deviationCalc >= -0.002 && deviationCalc <= 0.002) {
            currentTooth = (i + 1);
            document.getElementById("accuracy").innerHTML = "&#10032;&#10032;&#10032;"
        } else if (deviationCalc >= -0.003 && deviationCalc <= 0.003) {
            currentTooth = (i + 1);
            document.getElementById("accuracy").innerHTML = "&#10032;&#10032;"
        } 
        else if (deviationCalc >= -0.004 && deviationCalc <= 0.004) {
            currentTooth = (i + 1);
            document.getElementById("accuracy").innerHTML = "&#10032;"
        } else if (deviationCalc >= -0.005 && deviationCalc <= 0.005) {
            currentTooth = (i + 1);
            document.getElementById("accuracy").innerHTML = "&#10032;"
        }
        else if (deviationCalc >= -0.006 && deviationCalc <= 0.006) {
            if ((roundPrev) < (roundNext)) {
                currentTooth = prevTooth;
            } else if ((roundPrev) > (roundNext)) {
                currentTooth = nextTooth;
            } else if (prevTooth !== nextTooth && roundPrev === roundNext) {
                currentTooth = "Between Teeth?";
                document.getElementById("accuracy").innerHTML = "";
                document.getElementById("currToothDeviation").innerHTML = "Between Teeth"
                document.getElementById("graph_draw").innerHTML = prevTooth + "&#9711;&#9711;&#9711;&#9711;"+"??"+"&#9711;&#9711;&#9711;&#9711;" + nextTooth;
                document.getElementById("displayAdjust_283200_1").innerHTML = "___";
                document.getElementById("displayAdjust_283200_2").innerHTML = " ";
            }
        // if measured deviation is greater than array's largest numbers (positive or negative),
        // instructs technician to recheck input lever's adjustment as per CMM
        } else if (Math.abs(deviation) > largestNum_283200 + 0.004) {
            prevTooth = "??";
            nextTooth = "??";
            if (Math.abs(deviation) > largestNum_283200 + 0.005) {
                document.getElementById("accuracy").innerHTML = "";
                document.getElementById("currToothDeviation").innerHTML = "unknown"
                document.getElementById("displayTooth_283200").innerHTML = "unknown";
                document.getElementById("graph_draw").innerHTML = "&#9711;&#9711;&#9711;&#9711;&#9711;"+"??"+"&#9711;&#9711;&#9711;&#9711;&#9711;";
                document.getElementById("displayAdjust_283200_1").innerHTML = "check input lever for proper adjustment. Refer to assembly section.";
                document.getElementById("displayAdjust_283200_2").innerHTML = " ";
            }
        }
    }

    // *********************************************
    // Draws graph for 'Measurement Accuracy' box
    // calculate deviation of current tooth from null
    let currToothVal = tooth_283200[currentTooth - 1];

    // displays current tooth deviation from null
    if (currToothVal) {
        document.getElementById("currToothDeviation").innerHTML = "Tooth " + currentTooth + ": deviation from Null = " + currToothVal.toFixed(3); 
    }

    // Fixes JS rounding issues
    let num = deviation - currToothVal,
        rounded = Number(parseFloat(num).toFixed(3));

    // draws 'graph' in 'Measurement Accuracy' box
    if (rounded === 0.000 ) {
        document.getElementById("graph_draw").innerHTML = "&#9711;&#9711;&#9711;&#9711;&#9711;"+currentTooth+"&#9711;&#9711;&#9711;&#9711;&#9711;";
    } else if (rounded === 0.001) {
        document.getElementById("graph_draw").innerHTML = "&#9711;&#9711;&#9711;&#9711;&#9711;"+currentTooth+"&#9711;&#9711;&#9711;&#9711;&#9711;";
    } else if (rounded === 0.002) {
        document.getElementById("graph_draw").innerHTML = "&#9711;&#9711;&#9711;&#9711;"+currentTooth+"&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;";
    } else if (rounded === 0.003) {
        document.getElementById("graph_draw").innerHTML = "&#9711;&#9711;&#9711;"+currentTooth+"&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;";
    } else if (rounded === 0.004) {
        document.getElementById("graph_draw").innerHTML = "&#9711;&#9711;"+currentTooth+"&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;";
    } else if (rounded === 0.005) {
        document.getElementById("graph_draw").innerHTML = "&#9711;"+currentTooth+"&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;"+nextTooth;
    } else if (rounded === -0.005) {
        document.getElementById("graph_draw").innerHTML = prevTooth+"&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;"+currentTooth+"&#9711;";
    } else if (rounded === -0.004) {
        document.getElementById("graph_draw").innerHTML = "&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;"+currentTooth+"&#9711;&#9711;";
    } else if (rounded === -0.003) {
        document.getElementById("graph_draw").innerHTML = "&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;"+currentTooth+"&#9711;&#9711;&#9711;";
    } else if (rounded === -0.002) {
        document.getElementById("graph_draw").innerHTML = "&#9711;&#9711;&#9711;&#9711;&#9711;&#9711;"+currentTooth+"&#9711;&#9711;&#9711;&#9711;";
    } else if (rounded === -0.001) {
        document.getElementById("graph_draw").innerHTML = "&#9711;&#9711;&#9711;&#9711;&#9711;"+currentTooth+"&#9711;&#9711;&#9711;&#9711;&#9711;";
    }
    // end of Draws graph for 'Measurement Accuracy' window
    // *********************************************
}
// == null adjustment 283200 end ==
// ================================