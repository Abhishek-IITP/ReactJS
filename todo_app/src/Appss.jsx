function App(){
    const[task, setTask] = useState({title: "", desc: ""});
    const[allTasks, setAllTasks] = useState([]);
    function todoDekhja(){
        setAllTasks([...allTasks,task])
        setTask({title: "", desc: ""});
    }
    function removeTodo(i){
        allTasks.splice(i,1);
        setAllTasks([...allTasks]);
    }
    return(
        <>
        <div>
            <input type="text" placeholder="title" onChange={(e)=> setTask((upperValue)=>({...upperValue,title: e.target.value}))} />
            <br />
            <br />
            <input type="text" placeholder="description" onChange={(e)=>setTask((upperValue)=>({...upperValue, desc: e.target.value}))}/>
            <br />
            <br />
            <button onClick={todoDekhja}>Add</button>
        </div>
        <div>
            {allTasks.map((kaam,i)=>(
                            <div>
                            <p>{i+1}</p>
                            <h1>{kaam.title}</h1>
                            <p>{kaam.desc}</p>
                            <button onClick={()=>removeTodo(i)}>Remove</button>
                        </div>  

            ))}
        </div>
  
        </>
  
        
    )
  }