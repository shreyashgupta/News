import React from 'react';
import 'tachyons';
import "./article.css"
const News=({title,desc,author,content,publishedAt,img,link})=>{
return(

<div className="tc" id="card">
    <p id="title">{title}</p>
        <div id="main">
           <img src={img} alt="Not found" id="ari"></img>
             
              <p id="desc">{desc}</p>
              <p id="cont">{content}</p>
         
        </div>
    <p id="link">To read more click<a href={link}>HERE</a></p>
        <div className="end"> 
           <p id="aut">Published By: {author}</p>
           <p id="time"> Published At: {publishedAt}</p>
        </div>   
 </div>      
	);
}

export default News;