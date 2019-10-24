
//localStorage.clear(); 
function showForm() {

    let form = document.getElementById('artist_form');
    let button = document.getElementById('add_btn');
    
    
    let form2 = document.getElementsByClassName('main_artist_div');
    form2[0].style.display = "none";

    if (form.style.display != "none" && button.style.display !="none") {
        form.style.display = "none";
        button.style.display = "none";

      } else {
        form.style.display = "block";
        button.style.display = "block";
      }
      
}

function displayPlaceholder() {
  let form = document.getElementsByClassName('artist_input_form');
  form[0].placeholder = "Name";
  form[1].placeholder = "About";
  form[2].placeholder = "Image Url";


}

displayPlaceholder();

function getInformation() {
  
  let form = document.getElementsByClassName('artist_input_form');
  let name = form[0].value;
  let about = form[1].value;
  let imageUrl = form[2].value;
  
  

  if(name ==="") {
    alert('Name field should not be empty!');    
    return; 
  }
  else if(about ==="") {
    alert('About field should not be empty!');    
    return; 
  }
  else if (imageUrl ==="") {
    alert('Image Url field should not be empty!');   
    return; 
  }

  showForm();
  
  let form2 = document.getElementsByClassName("main_artist_div");
  
  if (form2[0].style.display != "block" ) {
    form2[0].style.display = "block";
    
  } 
  else {
    form2.style.display = "none";
    
   
  }
  addArtistFunction(name, about, imageUrl);
   

}


function addArtistFunction(name, about, imageUrl) {
  



  var mainartistDiv = document.getElementsByClassName('main_artist_div');

  mainartistDiv[0].innerHTML=localStorage.getItem(1);
  var artist = document.createElement("div");
  //artist.style.display= "none";
  artist.style.marginLeft="33%";
  artist.style.width="30%";
  artist.style.border="solid lightgray";
  artist.style.borderRadius= "5px";
  artist.style.height="100px";
  artist.setAttribute('class', 'artistClass');
  //Artist Image
  var artistImage = document.createElement("img");
  artistImage.src = imageUrl;
  artistImage.style.width = "80px";
  artistImage.style.height= "80px";
  artist.appendChild(artistImage);
  //Artist Name
  var artistName = document.createElement("div");
  artistName.style.marginLeft="25%";
  artistName.style.marginTop="-20%";
  artistName.style.fontWeight="bold";
  artistName.style.color="black";
  artistName.style.fontSize="25px";
  artistName.setAttribute('class', 'artistName');
  artistName.appendChild( document.createTextNode(name) );
  artist.appendChild(artistName);
  
  //Artist About
  var artistAbout = document.createElement("div");
  artistAbout.style.marginLeft="25%"; 
  artistAbout.style.fontWeight="unset";
  artistAbout.style.fontSize="20px";
  artistAbout.appendChild( document.createTextNode(about) );
  artist.appendChild(artistAbout);
  //Delete Button
  var artistDeleteBtn = document.createElement("button");
  artistDeleteBtn.style.height="30px";
  artistDeleteBtn.style.width="60px";
  artistDeleteBtn.style.marginTop="-2.5%";
  artistDeleteBtn.style.borderRadius="10px"; 
  artistDeleteBtn.style.marginLeft="24%";
  artistDeleteBtn.style.backgroundColor="red";
  artistDeleteBtn.style.color="white";
  artistDeleteBtn.style.position= "absolute";
  artistDeleteBtn.setAttribute("class", "deletebtn");
  artistDeleteBtn.appendChild( document.createTextNode("Delete"));
  artist.appendChild(artistDeleteBtn);
  mainartistDiv[0].appendChild(artist);




  var s = document.getElementsByClassName('deletebtn'); 
  var x = document.getElementsByClassName('artistClass');
  
  for(let i=0; i < x.length; i++) {
      s[i].onclick = function()
         {
          
         
          
          try {
            mainartistDiv[0].removeChild(x[i]);   
            localStorage.removeItem(1);
            localStorage.setItem(1,mainartistDiv[0].innerHTML);
          }
          catch(err) {
            mainartistDiv[0].removeChild(x[0]);   
            localStorage.removeItem(1);
            localStorage.setItem(1,mainartistDiv[0].innerHTML);
          }
          
          
      }.bind(this,i);

      localStorage.removeItem(1);

      
      localStorage.setItem(1,mainartistDiv[0].innerHTML);

   

  }
}








function search() {

  
  var searchWord = document.getElementsByClassName('artist_input')[1].value;
  //console.log('ss',searchWord);
  //---------------------------------------
  let form = document.getElementById('artist_form');
  let button = document.getElementById('add_btn');
  
  
   let form2 = document.getElementsByClassName('main_artist_div');
  // form2[0].style.display = "none";

  if (form2[0].style.display != "none") {
      form.style.display = "none";
      button.style.display = "none";

    } else {
      form.style.display = "block";
      button.style.display = "block";
    }
  
    //---------------------------------------
  var mainartistDiv2 = document.getElementsByClassName('main_artist_div');
  
  
  var s2= localStorage.getItem(1);

  mainartistDiv2[0].innerHTML = " ";
  mainartistDiv2[0].innerHTML= s2;
  


  
  
  
  for(let i=0; i<mainartistDiv2[0].childNodes.length;i++) {
    var str = mainartistDiv2[0].childNodes[i].childNodes[1].innerHTML;
    
    var artist = mainartistDiv2[0].childNodes[i];
    console.log(artist);
    
      console.log('sasd ', compareString(searchWord,str))
    
    if(compareString(searchWord,str) === -1 && mainartistDiv2[0].childNodes.length<=1) {
      mainartistDiv2[0].removeChild(artist);
      mainartistDiv2.innerHTML="";
    }
    else if(compareString(searchWord,str) === -1 ) {
      mainartistDiv2[0].removeChild(artist);
      
    }
    
  }
}
  

function compareString(searchWord, str) {
  
  console.log("Comparing", searchWord, str);
  for(let i=0; i<searchWord.length; i++) {
      console.log("ss",compareCharacter(searchWord, str, i))
    if(!compareCharacter(searchWord, str, i)) {
        return -1
  
    }
  }
  
  return 1;
}




function compareCharacter(searchWord, str, index) {
  return searchWord[index] === str[index];
}

//console.log(compareCharacter("ba","bb",0));