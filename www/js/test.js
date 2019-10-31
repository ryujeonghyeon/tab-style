//탭스타일(세로형), 탭+콘텐츠 증가 가능
function openTabVertical(evt, tabName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("box");//선언
    for (i = 0; i < x.length; i++) { //배열의 숫자가 증가하는 짝에 맞추어
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink"); //선언
    for (i = 0; i < x.length; i++) { //배열의 숫자가 증가하는 짝에 맞추어
      tablinks[i].className = tablinks[i].className.replace(" tablinkOn", ""); //클래스를 공백으로 바꾼다
    }
    document.getElementById(tabName).style.display = "block"; //안보이는 상태로 된 컨텐츠 박스를 보이게 변경
    evt.currentTarget.className += " tablinkOn"; //공백으로바꾼 탭의 클래스를 바꿔치기
  }
   
  
  
  //탭스타일(가로형), 탭+콘텐츠 증가 가능
  /*function openTabHorizental(evt, cityName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " w3-red";
  }*/
  