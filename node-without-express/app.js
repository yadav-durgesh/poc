const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const weekday = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

function addDays(result, days) {
    result.setDate(result.getDate() + days - result.getDay());
    return result;
}
const server = http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type': 'text/html'});
    var url = req.url;                      //get url parameter
    var replaceURL = url.replace('/','');   //remove slashes from start
    var checkObjectWeek = weekday.indexOf(replaceURL);  //get index of week
    if(url ==='/'){
        res.write('<h1>Home Page<h1>');     //write a response
        res.end();                          //end the response
    }else if(checkObjectWeek > -1){
        var date = new Date();
        res.write('<h1>'+replaceURL+'<h1> <br> <p>Time:'+addDays(date, checkObjectWeek)+'</p>');    //write a response
        res.end();                          //end the response
    }else{
        res.write('<h1>Page not found!<h1>'); //write a response
        res.end();                          //end the response
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});