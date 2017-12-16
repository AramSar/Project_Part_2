const ctx = document.getElementById('canvas').getContext('2d');

const drawCentrLines = function () {
    ctx.beginPath();

    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;

    ctx.moveTo(canvas.width/2 , 0);
    ctx.lineTo(canvas.width/2, canvas.height);
    ctx.stroke();

    ctx.moveTo(0, canvas.height/2);
    ctx.lineTo(canvas.width, canvas.height/2);
    ctx.stroke();
  };
drawCentrLines();

var transX = canvas.width * 0.5;
var transY = canvas.height * 0.5;
ctx.translate(transX, transY);
ctx.scale(25, 33);
ctx.lineWidth = 1/10;


function Func (k) {

let val = k;

 const neg_dec = [];
ctx.clearRect(0 , 0 , canvas.widht, canvas.height);
 const neg_decNum = function(x) {
    if (x < -canvas.height) return;
    neg_dec.push(x);
    neg_decNum(x - 0.01);
  };
  neg_decNum(0.000000001);
  //console.log(neg_dec);

  const neg_decRes = [];
  for (let i = 0; i < neg_dec.length; i++) {
    const scope = {
      x: neg_dec[i],
    };
    neg_decRes.push(math.eval(val, scope));
  }

  //console.log(neg_decRes);

  for (let j = 0; j < neg_dec.length - 1; j++) {
  
    ctx.lineWidth = 1/15;
    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.moveTo(neg_dec[j], -neg_decRes[j]);
    ctx.lineTo(neg_dec[j + 1], -neg_decRes[j + 1]);
    ctx.stroke();
  }

  const dec = [];

  const decNum = function(x) {
    if (x > canvas.width) return;
    dec.push(x);
    decNum(x + 0.01);
  };
  decNum(0.00000000001);
  //console.log(dec);

  const decRes = [];
  for (let i = 0; i < dec.length; i++) {
    const scope = {
      x: dec[i],
    };
    decRes.push(math.eval(val, scope));
  }
  //console.log(decRes);

  for (let j = 0; j < dec.length - 1; j++) {
    ctx.lineWidth = 1/15;
    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.moveTo(dec[j], -decRes[j]);
    ctx.lineTo(dec[j + 1], -decRes[j + 1]);
    ctx.stroke();
  }
};
 function hey1(){
 let x1 = document.getElementById("form1");
 let y1 = x1.elements["name1"].value;
 alert(y1);
 Func(y1);
 }

function hey(){
 let x = document.getElementById("form");
 let y = x.elements["name"].value;
 let z = y + "";
 let k = 0;
 let z1 ="";

 function findP(str) {
   for( let i = 0; i < str.length + 4; i++ ){
     if(str[i] + str[i+1] + str[i+2] + str[i+3] === "path"){
        k = i+4;
        return k;
          }
        }
      }

 function upgr(str, k) {
    for (let j = k+1; j < str.length; j++){
      z1 += str[j];
      }

    return z1;
  }
  findP(z);

  upgr(z, k);
      
  const img = new Image();
  img.src = z1;

  let strs = OCRAD(img);
  
  let final = "";
  for( let g= 0; g < strs.length -1; g++){
        final += strs[g];
      }

  Func(final);
 }

