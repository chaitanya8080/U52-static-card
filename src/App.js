// import logo from './logo.svg';
import './App.css';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

//   const name = "chaitanya";
//   const skills = ["a","b","c"];
//   return (
//   <div className='App'>hellow {name} {name} {name} {name} 
//   <button className='App'>click</button>

//   <div>
//     {skills.map((e)=>{
//         return <Skill skill={e} />
//     })}
//   </div>
//   </div>


//   );
  
// }

// function Skill({skill}){
//   return <p>skill:{skill}</p>

// import logo from './logo.svg';

 var os=["Android","Blackberry","iPhone","Windows"];
var product=["Samsung","HTC","Micromax","Apple"] 
return (
   <div className='App'>
  <h1>Mobile Operating System</h1>
    <ul>
      {os.map(e=>{
   return <OS os={e}></OS>
      })}
    </ul>
    
    <h1>Mobile MobileManufacturers</h1>
      <ul>
        {product.map(e=>{
          return <MANU product={e}></MANU>
        })}
      </ul>
    </div>
  )
}

function OS(props){
  return <li>{props.os}</li>
}
function MANU(props){
  return <li>{props.product}</li>
}




export default App;
