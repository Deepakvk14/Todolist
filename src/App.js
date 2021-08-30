import React,{useState,useEffect} from "react";
import './App.css';
 
function App() {
  const [input, setInput]= useState('')
  const [post, setPost] = useState([])
  const [update,setUpdate] = useState(true)
  const [edit, setEdit]= useState(null)
  useEffect(()=>{

  },[])
  const Post= ()=>{
    if(!input){
      alert("first enter value")
    }
    else if(input && !update){
        setPost(
          post.map((e)=>{
            if(e.id===edit){
              return{...e,name:input}
            }
            return e;
          })
         
        )
        
        setEdit('')
        setUpdate(true)
    setInput('')
    }
   else {
      const data = {id:new Date().getTime().toString(),name:input}
      setPost([...post,data])
      setInput('')
      
      console.log(data)
    }
  }
const Remove =((ind)=>{

  const updatePost=post.filter((e)=>{
  return ind !== e.id;
  }
    );
    setPost(updatePost);  
})
const Edit=((elm)=>{
  
  const newId = post.find((e)=>{
    return elm === e.id;
    
  })
  setUpdate(false)
  setEdit(elm)
  setInput(newId.name)

  

})
  const Delete =(()=>{  
   
    setPost([])
    
  })

      return (
    <div className="App">
    <h2>Add Your Todo</h2>
     <div className="tudo">
     
     <input placeholder="enter ur name" type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
     {
        update ? <button type="submit" onClick={Post}>Post</button> :
        <button type="submit" onClick={Post}>Update</button>
     }
     
     </div>
     <div className="Post">
        {
          post.map((e)=>{
            return(<div className="post1" key={e.id}>
              <div className="post"> 
               <h4>  {e.name} </h4>
               </div>
               <div>
               <button onClick={()=> Edit(e.id)}>Edit</button>
               <button onClick={()=> Remove(e.id)}>Remove</button>
              </div>
              
           </div> )
          })
        }
        
     </div>
     <button onClick={Delete}>Remove All</button>
    </div> 
  );
}

export default App;
