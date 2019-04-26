import React from 'react';
import News from './news.js';


const List=({article})=>{

        	    return(     
        	         <div>{
        	         article.map((news,index)=>{
        	         	return(<News 
        	         		key={index}
        	         		title={article[index].title}
        	         		author={article[index].author}
        	         		desc={article[index].description}
        	         		content={article[index].content}
        	         		publishedAt={article[index].publishedAt}
        	         		img={article[index].urlToImage}
        	         		link={article[index].url}/>);
        	         
        	                 	     })}
        	         </div>
        	         );
        	}


export default List;