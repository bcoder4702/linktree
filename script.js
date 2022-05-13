var currSentence="I";
var cursor='_';
var sentence_array=[
" am an IT Undergrad",
" love problem solving",
" am a competitive programmer",
" am a developer",
" am learning web development",
];

function add(char){
  currSentence+=char;
  document.getElementById("changingText").innerHTML=currSentence+cursor;
}

function subtract(length){
  currSentence=currSentence.substring(0,length-2);
  document.getElementById("changingText").innerHTML=currSentence+cursor;
}


var ind_i=0,ind_j=-1;
function loopADD(){
  
  if(currSentence.length>40 || currSentence[0]!='I'){
    currSentence="I";
    ind_j=-1;
    ind_i=0;
  }

  ind_j++;
  if(ind_j!=sentence_array[ind_i].length){
  setTimeout(function() {
    add(sentence_array[ind_i][ind_j])
  }, 100);
  setTimeout(function() {
    loopADD()
  }, 100);
}
}


function sentRemov(){
  if(currSentence.length>2){
  setTimeout(function() {
    subtract(currSentence.length)
  }, 100);
  setTimeout(function() {
    sentRemov()
  }, 100);
}
}
var check=0;
function infRun(){
  var local = 4000;
  if(check%2==0){
    local = 4000;
    loopADD()
  }
  else
  {
    ind_j=-1;
    ind_i++;
    if(ind_i==sentence_array.length){
      ind_i=0;
    }
    local=2000;
    sentRemov();
  }
  check++;
  setTimeout(function() {
    infRun()
  }, local);
}
infRun();