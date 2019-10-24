var http = require('http');
const bodyParser = require('body-parser');
var fs = require('fs');


http.createServer((request, response) => {
  const { headers, method, url } = request;
  let body = [];
  request.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();

 //SYNC READ TEXT FILE   
 var text = fs.readFileSync('artists.txt','utf8')
  response.on('error', (err) => {
      console.error(err);
    });
    //SETTING HEADER CORS
    response.writeHead(200, {
          'Content-Type': 'text/plain',
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
        });

      //SENDING DATA2 TO CLIENT 
      const data2 = { username: text }; 
      const responseBody = { headers, method, url, body };
      response.end(JSON.stringify(data2))

  });
}).listen(8080);  





http.createServer((request, response) => {

  const { headers, method, url } = request;
  let body = [];
  request.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    response.on('error', (err) => {
      console.error(err);
    });
    //SETTING HEADER CORS
    response.writeHead(200, {
          'Content-Type': 'text/plain',
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
        });
      writeToTextFile(body);  

      //SENDING DATA2 TO CLIENT 
      const data2 = { username: "text" }; 
      const responseBody = { headers, method, url, body };
      response.end(JSON.stringify(data2))

  });
}).listen(8081);  

function writeToTextFile(body) {
  var obj = JSON.parse(body);
  
  
  let artist = obj.name + ' ' + obj.about + ' '+ obj.imageUrl + '\n';
  try{
    fs.appendFileSync("artists.txt", artist)
  }
  catch(err){
    console.log(err);
  }

}


http.createServer((request, response) => {

  const { headers, method, url } = request;
  let body = [];
  request.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    var obj = JSON.parse(body);

    let artistArray = obj['name']
    
    let line="";
    for(let i =0; i < artistArray.length; i++) {
    
    line +=artistArray[i];

    }
    fs.writeFileSync("artists.txt",line )

  
  response.on('error', (err) => {
      console.error(err);
    });

    //SETTING HEADER CORS
    response.writeHead(200, {
          'Content-Type': 'text/plain',
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
        });

      //SENDING DATA2 TO CLIENT 
      fs.readFile('artists.txt', (err, data) => {
        if (err) throw err;
       
      });
      const data2 = { username: "text" }; 
      const responseBody = { headers, method, url, body };
      response.end(JSON.stringify(data2))

  });
}).listen(8082);  



