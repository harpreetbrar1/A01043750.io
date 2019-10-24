



 class Artist {
     
    constructor(name, about, imageUrl) {
      this._name = name;
      this._about=about;
      this._imageUrl=imageUrl;
    }
    
    
    
    set name(name) {
        this._name = name;
        
        
    
    }
    set about(about) {
        this._about = about;
        
      }
    set imageUrl(imageUrl) {
       this._imageUrl=imageUrl;
       
      }
    get about() {
        return this.name;
      }
    get imageUrl() {
        return this.name;
      }
    
  }

  


  