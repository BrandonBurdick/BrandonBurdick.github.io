//Establishes `donutCounter` as a counter for donuts
//Establishes `bakerCost` as the current cost for bakery chef hiring
//Establishes `chefsHired` as the current number of chefs hired
//Establishes `ovensInstalled` as the current number of installed ovens
//Establishes `ovenCost` as the current cost for installing an oven
//sets bakershired function at a 1000ms interval
//sets munch sound effect for later playback
let donutCount = 0;
// donutCount += 99;
// donutCount += 899; 
let bakerCost = 100;
let chefsHired = 0; 
let ovensInstalled = 0;
let ovenCost = 900;
let time = setInterval(bakersHired, 1000);
const munch = new Audio('./assets/audio/munch.mp3');


//function to add up all manual clicks and display them in specified <p> tag.
//added if statement to control greying of image buttons
function donutTally() {
    donutCount++;
    // donutCount+=bakerCost
    document.getElementById('totalDonuts').innerHTML = 'Total Donuts: '+donutCount;
    munch.currentTime = 0;
    munch.volume = 0.2;
    munch.play();
    if (bakerCost<=donutCount) {
        document.getElementById('baker').style.filter = "none";
    }
    else{
        document.getElementById('baker').style.filter = "grayscale(100%)";
    }
    if (ovenCost<=donutCount) {
        document.getElementById('oven').style.filter = "none";
    }
    else{
        document.getElementById('oven').style.filter = "grayscale(100%)";
    }
}


//function to queue chefs in bakerDiv
function createChef() {
    let chef = document.createElement('img');
    chef.src = './assets/images/baker1.png';
    if (chefsHired<26) {
        return chef;
    }
}

//function to queue ovens in ovenArea
function installOven() {
    let oven = document.createElement('img');
    oven.src = './assets/images/oven.png'
    if (ovensInstalled<25) {
        return oven;
    }
}

//function to add additional ovens multiplying autoclicking by a factor of 10
//added if statement to control greying of image button
//added animations for button press
function addOven() {
    if (ovenCost<=donutCount) {
        donutCount = donutCount-ovenCost;
        ovenCost = Math.round(ovenCost+(ovenCost*.1));
        document.getElementById('oCost').innerHTML = 'Cost of Oven Installation: '+ ovenCost +" Donuts";
        document.getElementById('totalDonuts').innerHTML = 'Total Donuts: '+donutCount;
        ovensInstalled++;
        document.getElementById('ovens').innerHTML = 'Additional Ovens Installed: '+ovensInstalled;
        document.getElementById('ovenArea').appendChild(installOven());
        document.getElementById('oven').style.transform = "scale(.75,.75)";
        setTimeout(function() {document.getElementById('oven').style.transform = "none";},0060);
    }
    if (ovenCost<=donutCount) {
        document.getElementById('oven').style.filter = "none";
    }
    else{
        document.getElementById('oven').style.filter = "grayscale(100%)";
    }
}

//if statement to control baker greyscale
// if (bakerCost<=donutCount) {
//     document.getElementById('baker').style.filter = "none";
// }

//function containing if/else statement to determine if `bakersCost` <= `donutCount` and then calculating new values and printing said values. 
//added animations for button press
function hireWorker() {
    if (bakerCost<=donutCount) {
        donutCount = donutCount-bakerCost;
        bakerCost = Math.round(bakerCost+(bakerCost*.1));
        document.getElementById('displayDonutCost').innerHTML = 'Cost of Hiring: '+ bakerCost +" Donuts";
        document.getElementById('totalDonuts').innerHTML = 'Total Donuts: '+donutCount;
        chefsHired++;
        document.getElementById('bakers').innerHTML = 'Bakers Hired: '+chefsHired;
        document.getElementById('bakerDiv').appendChild(createChef());
        document.getElementById('baker2').style.visibility = "visible";
        document.getElementById('baker').style.transform = "scale(.75,.75)";
        setTimeout(function() {document.getElementById('baker').style.transform = "none";},0060);
    }
}

//function for baker's donut output
//added oven installation output
//added if statements to control greying out of image buttons
function bakersHired() {
    if (ovensInstalled==0) {
        donutCount=donutCount+chefsHired;
    }
    else {
        donutCount=donutCount+(chefsHired*(ovensInstalled*10));
    }
    document.getElementById('totalDonuts').innerHTML = 'Total Donuts: '+donutCount;
    if (bakerCost<=donutCount) {
        document.getElementById('baker').style.filter = "none";
    }
    else{
        document.getElementById('baker').style.filter = "grayscale(100%)";
    }
    if (ovenCost<=donutCount) {
        document.getElementById('oven').style.filter = "none";
    }
    else{
        document.getElementById('oven').style.filter = "grayscale(100%)";
    }
}

//function resetting all variables
function resetAll() {
    donutCount = 0;
    bakerCost = 100;
    chefsHired = 0;
    ovensInstalled = 0;
    ovenCost = 900;
    document.getElementById('displayDonutCost').innerHTML = 'Cost of Hiring: '+ bakerCost +" Donuts";
    document.getElementById('totalDonuts').innerHTML = 'Total Donuts: '+donutCount;
    document.getElementById('bakers').innerHTML = 'Bakers Hired: '+chefsHired;
}


//functions to control modal
function openModal() {
    document.getElementById('modal').style.display = "block";
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}
