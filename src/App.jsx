import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  // code here

  let data = imageData()

  let galleryStyle = {
    textAlign:"center"
  }

  let styleMydiv = {
    display:"grid",
    gridTemplateColoumns:"repeat(2,1fr)",

  }

  return(
  <>
  <h1 style={(galleryStyle)}>Kalvium Gallery </h1>

{/* 1st Method */}
  {/* <div style={styleMydiv}>
    <img src={data[0].img} width={"200px"}></img>
    <img src={data[1].img} width={"200px"}></img>
    <img src={data[2].img} width={"200px"}></img>
    <img src={data[3].img} width={"200px"}></img>
  </div> */}

{/* 2nd Method  */}
  <div>
    {data.map((el) => (
      <div key={el.id}>
        <img src={el.img} width={"300px"} style={{marginBottom: "50px"}} />
        </div>
    ))}
  </div>
  </>)
}


export default App;
