var i=0;
var imgsrc = "https://randomuser.me/api/portraits/med/women/"+i+".jpg"
var personArray = {
                    '0': {
                        'name': 'Barot Bellingham',
                        'about': 'Royal Academy of Painting and Sculpture',
                        'imagesrc': {imgsrc}

                    },
                    '1': {
                        'name': 'Jonathan G. Ferrar ||',
                        'about': 'Artist to Watch in 2012',
                        'imagesrc': {imgsrc}
                    },
                    '2': {
                        'name': 'Hillary Hewitt',
                        'about': 'New York University',
                        'imagesrc': {imgsrc}
                    },
                    '3': {
                        'name': 'Hassum Harrod',
                        'about': 'Art College in New Delhi',
                        'imagesrc': {imgsrc}
                    },
                    '4': {
                        'name': 'Jennifer Jerome',
                        'about': 'Univeristy of Waterloo',
                        'imagesrc': {imgsrc}
                    },
                }
                    var artistName = document.getElementsByClassName('artistName');
                    var artistBackground = document.getElementsByClassName('artistBackground');
                   
                  for(var i = 0; i <5; i++) {
                      artistName[i].innerHTML = personArray[parseInt(i)]['name'];
                  }
                  for(var i = 0; i <5; i++) {
                    artistBackground[i].innerHTML = personArray[i]['about'];
                }
