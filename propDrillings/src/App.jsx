import { useState,useEffect, useContext } from "react";
import userContext from "./Components/Utills/Context";
function App() {
  let [username, setUsername] = useState('');
  useEffect(() => {
    let data='abhishek';
    setUsername(data);
  }, []);
  return (
    <userContext.Provider value={{username,channelName:'mr_abhi_930'}} >
    <div style={{border: '2px solid red', padding: '10px'}}>
      Hello
      <GrandParent />
    </div>
      </userContext.Provider>
    
  )
}



function GrandParent() {
  return (
    <div style={{border: '2px solid green', padding: '10px'}}>
        <h1>GrandParent</h1>
        <Parent />
        
    </div>

  );
}
function Parent() {
  return (
    <div style={{border: '2px solid yellow', padding: '10px'}}>
        <h1>Parent</h1>
        <Child/>
        
    </div>

  )
}
function Child() {
  let {username,channelName}=useContext(userContext);
  console.log(username)
  return (
    <div style={{border: '2px solid blue', padding: '10px'}}>
        <h1>Child</h1>
        <h2>{channelName}</h2>

    </div>

  )
//   return (
// {
//   /* <userContext.Consumer>
//   {
//     (name)=>{
//       console.log(name)
//     }
//   }
// </userContext.Consumer> */
//  }


//   )
}


export default App;
 
