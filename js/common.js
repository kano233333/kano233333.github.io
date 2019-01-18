//clean
function cleanJIAO(){
  let line = document.getElementsByClassName('line');
  for(let i=0;i<line.length;i++){
    let str = line[i].innerText;
    line[i].innerText = line[i].innerText.replace(/>/,'');
  }
}