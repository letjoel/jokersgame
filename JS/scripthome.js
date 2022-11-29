

    let div1 = document.querySelector(".main__first");
      let div2a = document.querySelector(".main__second-b");
    let div2 = document.querySelector(".main__second");
    let div3 = document.querySelector(".main__third");
    let div4 = document.querySelector(".main__fourth");
  

SwitchDivs(1)
  

export function SwitchDivs(param){
    if(param == 1){
      div1.style.display = 'flex'; 
      div2a.style.display = 'none';
      div2.style.display = 'none';
      div3.style.display = 'none';
      div4.style.display = 'none';
    }
    else if(param == 2){
        div1.style.display = 'none'; 
        div2a.style.display = 'flex';
        div2.style.display = 'none';
        div3.style.display = 'none';
        div4.style.display = 'none';}
    else if(param == 3){
      div1.style.display = 'none'; 
      div2a.style.display = 'none';
      div2.style.display = 'flex';
      div3.style.display = 'none';
      div4.style.display = 'none';
    }
    else if(param == 4){
        div1.style.display = 'none';
        div2a.style.display = 'none';
        div2.style.display = 'none';
        div3.style.display = 'flex';
        div4.style.display = 'none';
    }
    else if(param == 5){
        div1.style.display = 'none'; 
        div2a.style.display = 'none';
        div2.style.display = 'none';
        div3.style.display = 'none';
        div4.style.display = 'flex';
    }

        
    }
