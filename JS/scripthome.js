
    let div1 = document.querySelector(".main__first");
    let div2 = document.querySelector(".main__second");
    let div3 = document.querySelector(".main__third");
    let div4 = document.querySelector(".main__fourth");
    let div5 = document.querySelector(".main__second-b");
  

function SwitchDivs(param){
    if(param == 1){
      div1.style.display = 'flex'; 
      div2.style.display = 'none';
      div3.style.display = 'none';
      div4.style.display = 'none';
      div5.style.display = 'none';
    }
    else if(param == 2){
      div1.style.display = 'none'; 
      div2.style.display = 'flex';
      div3.style.display = 'none';
      div4.style.display = 'none';
      div5.style.display = 'none';
    }
    else if(param == 3){
        div1.style.display = 'none';
        div2.style.display = 'none';
        div3.style.display = 'flex';
        div4.style.display = 'none';
        div5.style.display = 'none';
    }
    else if(param == 4){
        div1.style.display = 'none'; 
        div2.style.display = 'none';
        div3.style.display = 'none';
        div4.style.display = 'flex';
        div5.style.display = 'none';
    }
    }
