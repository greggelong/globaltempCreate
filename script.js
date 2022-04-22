//https://data.giss.nasa.gov/gistemp/

// uses async and await and fetch in an async function

let data;
let cTable= [];
let years = [];
let temps =[];
let nTemps =[];
let sTemps =[];
let t =0;
 
function preload(){
  data = loadStrings("test.csv", cleanData)
}

 

function setup(){
  createCanvas(400,400)
  
  frameRate(1)
}

function draw(){
  background(0);
  textSize(12)
  //stroke(255)
  //fill(255)
  // year
  let yr = years[t]
  text(yr,10,12)

  translate(width/2,height/2)

  // southern hemisphere
  let sh = sTemps[t]
  

  //let sClr = map(sh,Math.min(...sTemps), Math.max(...sTemps),0,255)
  //print(sh,sClr, Math.min(...sTemps), Math.max(...sTemps))
  
  fill(255,0,0)
  ellipse(0,width/4,width/2,width/2)
  arc(0,0,width,height,0,PI)

  // northern hemisphere
  let nh =nTemps[t]
  let nClr = map(nh,Math.min(...nTemps), Math.max(...nTemps),0,255)
  //fill(nClr,0,0)
  //arc(0,0,width,height,PI,TWO_PI)

  // increment t
  t =t +1;
  t = t% years.length
  
}


 

function cleanData(){
     
    console.log(data)
    for(let i = 0; i<data.length-1;i++){  // -1 because of the extra row left over from the last \n line break
        cTable[i] = data[i].split(',');
        years[i] = parseFloat(cTable[i][0]);
        temps[i] = parseFloat(cTable[i][1])+14;  // global average temp
        nTemps[i] = parseFloat(cTable[i][2])+14;
        sTemps[i]= parseFloat(cTable[i][3])+14;

    }
    print(years)
    print(temps)
    print(nTemps)
    print(sTemps)
    
    console.log(cTable);
    console.log(parseFloat(cTable[1][1])) // table is now a 2 dimensional array
}
  

 
 


