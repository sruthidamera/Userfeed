import { useState ,Component, useEffect } from 'react';
import Axios from 'axios';
import Post from './Post';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const App=()=> {

const [ PostData,setPostData]=useState([]);  //Data fetched from backend is stored here
const[Loading,SetLoading]=useState(true);    //Data loading
const[error,SetError]=useState(false);       //errors encountered while loading

//USE EFFECT
  useEffect(()=>{

    //GETDATA() : fetch data intially from http://localhost:3001/api/get
    const getData = ()=>{
      fetch('http://localhost:3001/api/get')
      .then(response => {
        if(response.ok){
          return response.json()
        }
        throw response;
        })
    .then(data =>setPostData(data))
    .catch(error=>{
      console.log("error fetching data :"+error)
      SetError(false);
      })
    .finally(()=>SetLoading(false));
  }



  //ADDVIEW() : increment views by 1
  const addView=()=>{
    Axios.put("http://localhost:3001/api/updateviews").then((response) => {
    fetchPostData()
    })
  }


  getData();
  addView();
  },[]);


//FETCHPOSTDATA(): fetch data from http://localhost:3001/api/get
const fetchPostData = ()=>{
      fetch('http://localhost:3001/api/get')
      .then(response => response.json())
      .then(data =>setPostData(data));
}

 
//ADDLIKE() : increment likes by 1
const addLike=()=>{
  Axios.put("http://localhost:3001/api/updatelikes").then((response) => {
    fetchPostData()
})
}


//ADDCOMMENT() : increment comments by 1
const addComment=()=>{
  Axios.put("http://localhost:3001/api/updatecomments").then((response) => {
    fetchPostData()
})
}

//ADDSHARE() : increment shares by 1
const addShare=()=>{
  Axios.put("http://localhost:3001/api/updateshares").then((response) => {
    fetchPostData()
})
}


if(Loading) return "Loading..";
if(error) return "error..";



return (
    <div className="main">
      <Post PostData={PostData} onComment={addComment} onShare={addShare} onLike={addLike} />
    </div>
    )}


export default App;
