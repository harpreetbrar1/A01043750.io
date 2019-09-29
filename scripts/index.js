
function showForm() {
   
    let form = document.getElementById('artist_form');
    let button = document.getElementById('add_btn');
    
    console.log(form);
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
  console.log(form2);
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
  var artist = document.createElement("div");
  //artist.style.display= "none";
  artist.style.marginLeft="33%";
  artist.style.width="30%";
  artist.style.border="solid lightgray";
  artist.style.borderRadius= "5px";
  artist.style.height="100px";
  mainartistDiv[0].appendChild(artist);

  //Artist Image
var artistImage = document.createElement("img");
artistImage.src = imageUrl
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
  artistDeleteBtn.onclick = function(){
    mainartistDiv[0].removeChild(artist);
    
  }
  artistDeleteBtn.appendChild( document.createTextNode("Delete"));
  artist.appendChild(artistDeleteBtn);
   
}

