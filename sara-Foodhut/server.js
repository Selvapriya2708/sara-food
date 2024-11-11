/*
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
    const extname = path.extname(filePath);
    let contentType = 'text/html';

    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
        case '.gif':
            contentType = 'image/gif';
            break;
        case '.svg':
            contentType = 'image/svg+xml';
            break;
        default:
            contentType = 'text/html';
    }

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code == 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 Not Found</h1>', 'utf-8');
            } else {
                res.writeHead(500);
                res.end(`Server Error: ${error.code}`, 'utf-8');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
*/



@media all and (max-width:465px){
    .home h1{
       font-size: 60px;
       margin-left: 35%; 
       width: 500px;
       margin-top: 50px;
    }
    .home h3{
        font-size: 55px;
        margin-left: 45%;
        margin-top: 20px; 
        width: 400px;
    }
    .home .view-btn{
        margin-left: 63%;
        margin-top: 130px;
        font-size: 25px;
        height: 78px;
        width: 250px;
    }
    .about h1{
        font-size: 55px;
    }
   .menu h1{
      font-size: 55px;
   }
   .menu table tr{
    height:130px;
    }
   .book{
    padding-top: 90px;
    }
    form [type]{
        margin-left: 35px;
        margin-top: 3px;
        font-size: 20px;
        padding: 20px;
    }
    .book form{
        padding-top: 90px;
     }
     input[type="date"]{
        margin-top: 15px;
     }
     .book input[type=submit]{
        background-color:rgb(161, 31, 31);
        border: none;
        border-radius: 5px;
        width: 150px;
        font-size: 22px;
        margin-top: 60px;
        color:white;
        padding-top: 20px;
        padding-bottom: 20px;
        height: 60px;
    }
    .book h1{
        font-size: 55px;
        padding-top: 40px;
        margin-left: 10%;
    } 
.events .food{
    margin-left: 32%;
}
.events div h1{
    font-size: 55px;
}
.about{
    width: 185%;
}
.menu{
    width: 185%;
}
.book{
    width: 185%;
}
.events{
    width: 185%;
}
.events div input[type="submit"]{
    margin-top: 50px;
    font-size: 20px;
    padding-top: 15px;
    padding-bottom: 15px;
}
.events div .food{
    margin-left: 36%;
}
.article{
    display: inline-block;
    width: 100%;
}
.article .art1{
    background-size: 100% 200px;
    width: 600px;
    margin-left: 100px;
}
.article .art2{
    background-size: 100% 200px;
    width: 600px;
    margin-left: 100px;
    margin-top: 13px;
}
.article .art3{
    display: none;
}
.article .art1 p{
    margin-top: 220px;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 10px;
    font-size: 20px;
}
.article .art2 p{
    margin-top: 220px;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 10px;
    font-size: 20px;
}
.article .art3 p{
    margin-top: 220px;
    margin-left: 30px;
    margin-right: 30px;
    font-size: 20px;
    margin-bottom: 10px;
}
.review{
    width: 185%;
    padding-top: 150px;
}
.review h1{
    font-size: 55px;
}
.name{
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 100px;
}
.name h3{
    font-size: 31px;
    margin-left: 15px;
}
.name .p2{
    margin-left: 40px;
}
.name p{
    font-size: 22px;
}
.review-book article{
    height: 220px;
    margin-top: 100px;
}
.review-book .review-box3 article{
    margin-right: 5px;
    margin-bottom: 50px;
}
.review-book article p{
    font-size: 19px;
}
.contact{
    width:185%
}
}
@media all and (max-width:360px){
    .home h1{
        margin-top: 150px;
        margin-left: 40%;
        font-size: 80px;
    }
    .home h3{
        margin-left: 60%;
    }
    .home .view-btn{
        margin-left: 80%;
    }
    .about{
        width: 233%;
    }
    .menu{
        width: 233%;
    }
    .book{
        width: 233%;
    }
    .events{
        width: 233%;
    } 
    .review{
        width: 233%;
    } 
    .contact{
        width: 233%;
    }
} 



@media (max-width:1150px){
    .navbar a{
        text-decoration: none;
        font-weight: lighter;
        font-size: 20px;
        margin-left: 30px;
    }
}

@media all and (max-width:880px){
    header{
        width:100%;
        display: flex; 
        flex-direction: column;
        height: 80px;
    }
    header #menu-bar{
        display: block;
        position: absolute;
        top:50px;
        left:0px;
        margin-left: 15px;
        font-size: 15px;
    }  
    .scroll{
    font-size: 30px;
    margin-top: 35px;
    }
    header img{
        margin-right: 15px;
        align-self: flex-end;
        height:80px;
        margin-top: 7px;
    }
    header .navbar{
        position: absolute;
        top:120px;
        left:0px;
        width:100%;
        padding:10px 0px;
        background-color: rgb(31, 29, 29);
        display: none;
    }
    header .navbar a{
        font-size: 15px;
        margin:10px;
        display: block;
    }
     .home h1{
        font-size: 45px;
        padding-top: 200px;
    }
    .home h3{
      font-size: 40px;
      margin-top: 10px;
      text-align: center;
    }
    .home .view-btn{
        margin-top: 70px;
        margin-left:40%;
        background-color: rgb(161, 31, 31);
        font-size: 20px;
        width:200px;
        height: 50px;
        border-radius: 5px;
    }
    .about article{
        width:300%;
        height:700px;
        background-color: rgb(110, 110, 116);
    }
    .about aside{
        width:300%;
        height:700px;
    }
    .about img{
        width:100%;
        height:100%;
    }
    .about h1{
        padding-top: 35px;
        font-size: 43px;
    }
    .about p{
        margin: 15px;
        font-size: 13px;
    } 
    .menu h1{
        font-size: 43px;
    } 
    .menu{
        padding-top: 120px;
    }
    .menu table tr{
        width:100%;
        height:250px;
    }
    .book h1{
        font-size: 43px;
    }
    form [type]{
        width:230px;
        height:40px;
        padding:10px;
        margin-left: 5px;
        background-color: transparent;
        border: 1px solid white;
        font-size: 17px;
    }
    input[type="date"]{
        margin-top: 13px;
    }
    .book input[type="submit"]{
        background-color:rgb(161, 31, 31);
        padding:9px;
        border: none;
        border-radius: 5px;
        width: 190px;
        font-size: 20px;
        margin-top: 80px;
       position: relative;
    }   
.events div h1{
    font-size: 43px;
    margin-top: 10px;
}
.events input[type="submit"]{
    margin-top: 80px;
}
.article{
    margin-top: 80px;
    height: 400px;
}
.events div .food{
    margin-left: 37%;
} 
.article .art1{
    width: 280px;
    background-size: 100% 230px;
    margin-left: 8px;
}
.article .art2{
    width: 280px;
    margin-left: 7px;
    background-size: 100% 230px;
}
.article .art3{
    width: 280px;
    margin-left: 7px;
    background-size: 100% 230px;
}
.article .art1 p{
    font-size: 14px;
    margin-top: 250px;
    margin-left: 20px;
    margin-right: 20px;
}
.article .art2 p{
    font-size: 14px;
    margin-top: 250px;
    margin-left: 20px;
    margin-right: 20px;
}
.article .art3 p{
    font-size: 14px;
    margin-top: 250px;
    margin-left: 20px;
    margin-right: 20px;
}
.review h1{
    font-size: 43px;
    margin-top: 10px;
}
.name{
    justify-content: space-between;
    margin-left: 100px;
    margin-right: 100px;
    margin-top: 60px;
}
.name h3{
    font-size: 27px;
}
.name p{
    font-size: 17px;
}
.review-book{
    margin-left: 10px;
    margin-right: 10px;
}
.review-book article p{
    font-size: 14px;
}
.review-book article{
    width: 220px;
    height: 140px;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    margin-top: 90px;
}
.contact-way{
    font-size: 25px;
    margin-left: 53px;
    margin-right: 53px;
}
.contact-value{
    font-size: 15px;
    margin-left: 38px;
    margin-right: 38px;
}
.copyright{
    font-size: 17px;
}
}
@media all and (max-width:600px){
    .home h1{
      font-size: 45px;
      margin-left: 10%;
      margin-top: 70px;
    }
    .home h3{
        font-size: 35px;
        margin-left: 10%;
    }
    .home .view-btn{
        margin-left: 37%;
        height: 40px;
        font-size: 15px;
    }
    header{
        width:100%;
        height:80px;
    }
    header .navbar a{
        font-size: 15px;
        display: block;
    }
    header #menu-bar{
        font-size: 15px;
    }
    header img{
        margin-right: 260px;
        height: 70px;
    }
    .about{
        width: 100%;
    }
    .about h1{
        font-size: 50px;
        margin-left: 3%;
    }
    .about article{
        height:750px;
        background-color: rgb(62, 62, 74);
    }
    .about aside{
        display: none;
    }
    .about p{
        font-size: 18px;
        margin-top: 7px;
    }  
    .menu{
        width: 140%;
        background-color: rgb(62, 62, 74);
    }
    .menu h1{
        font-size: 50px;
    }
    .menu table tr{
        width:100%;
        height:160px;
    }
    .book h1{
        font-size: 50px;
    }
    .book{
        padding-top: 90px;
        width: 140%;
        }
        form [type]{
            width:220px;
            height:40px;
            padding:10px;
            margin-left: 20px;
            margin-top: 5px;
            background-color: transparent;
            border: 1px solid white;
            color:white;
            font-size: 15px;
        }
        .book form{
            padding-top: 40px;
         }
         input[type=submit]{
            background-color:rgb(161, 31, 31);
            padding:9px;
            border: none;
            border-radius: 5px;
            width: 190px;
            font-size: 16px;
            margin-top: 80px;
            color:white;
        }
        .events{
            width: 140%;
        }
        .events div h1{
            font-size: 50px;
        }
        .article{
           height:340px;
        }
        .article .art1{
            background-size: 100% 170px;
            margin-bottom: 10px;
        }
        .article .art2{
            background-size: 100% 170px;
            margin-bottom: 10px;
        }
        .article .art3{
            background-size: 320px;
            margin-right: 10px;
            background-size: 100% 170px;
            margin-bottom: 10px;
        }
        .article .art1 p{
            margin-top: 180px;
            margin-left: 30px;
            margin-right: 30px;
            font-size: 14px;
        }
        .article .art2 p{
            margin-top: 180px;
            margin-left: 30px;
            margin-right: 30px;
            font-size: 14px;
        }
        .article .art3 p{
            margin-top: 180px;
            margin-left: 30px;
            margin-right: 30px;
            font-size: 14px;
        }
        .events div .food{
            margin-left: 36%;
            padding: 10px;
        }
        .events div .juice{
            padding: 10px;
        }
        .review{
            width: 140%;
        }
        .review h1{
            font-size: 50px;
        }
        .review h3{
            font-size: 33px;
        }
        .review p{
            font-size: 20px;
        }
        .contact{
            width: 140%;
        }
        .contact-value{
            font-size: 20px;
        }
        .contact-way{
            font-size: 32px;
            margin-left: 80px;
            margin-right: 70px;
        }
        .copyright{
            font-size: 22px;
    }
}

 /*   
@media all and (max-width:880px){
 .navbar{
    display: none;
 }
header{
    width: 60%;  
    display: flex; 
    flex-direction: column;
}
header img{
    margin-right: 30px;
    margin-top: 3px;
    align-self: flex-end;
}
header #menu-bar{
    display: block;
    position: absolute;
    top:50px;
    left:0px;
    margin-left: 15px;
    font-size: 20px;
 }
 header .navbar{
    position: absolute;
    top:120px;
    left:0px;
    width:100%;
    padding:10px 0px;
    background-color: rgb(31, 29, 29);
    display: none;
}
 header .navbar a{
    font-size: 15px;
    margin:10px;
    display: block;
}
.home h1{
    font-size: 55px;
    text-align: center;
    padding-top: 220px;
}
.scroll{
    font-size: 30px;
    margin-top: 35px;
    }
.home h3{
  font-size: 45px;
  text-align: center;
  padding-top: 20px;
} 
.home .view-btn{
    margin-top: 70px;
    margin-left:42%;
    font-size: 20px;
    width:180px;
    height: 45px;
    border-radius: 5px;
} 
.about article{
    width:350%;
    height:700px;
}
.about aside{
    height:650px;
}
.about img{
    width:100%;
    height:100%;
}
.about{
    width: 102%;
    height:650px;
    padding-top: 0px;
}
.about h1{
    font-size: 53px;
    padding-top: 1px;
    text-align: center;
}
.about p{
    font-size: 13px;
    padding-top: 20px;
}
.menu{
    width:102%;
    padding-top: 2px;
    background-color: rgb(110, 110, 116);
}
.menu h1{
    color:white;
    font-size:53px;
    text-align: center;
}
.menu table tr{
    width:100%;
    height:250px;
}
.book h1{
    font-size: 53px;
}
}

*/