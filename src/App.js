import './App.css';
import {useState , useEffect} from 'react'

function App() {

  const [ data , setdata] = useState([])
  const [searchTerm ,setSearchTerm] = useState('')

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users").then((result)=>{
      result.json().then((res)=>{
        // console.log(res)
        setdata(res)
      })
    })
  } , [])

  return (
    
    <div className='App'>

      <div>
        <input type="text"
          className='searching'
          placeholder='Search for Name'
          onChange={event => {setSearchTerm(event.target.value)}}/>
      </div>

      {/* {console.log( "here",data)} */}
        <table className='table table-striped  figmaTable'>
          <tbody>
          <tr className='headOfNmae'>
              <th>Name</th>
              <th>UseName</th>
              <th>Email</th>
              <th>Company Email</th>
              <th>Lat</th>
              <th>Long</th>
            </tr>
            {
              
              data.filter((item)=>{
                if(searchTerm == ""){
                  return item
                }
                else if(item.name.toLowerCase().includes(searchTerm.toLowerCase()) 
                || item.username.toLowerCase().includes(searchTerm.toLowerCase())
                 || item.email.toLowerCase().includes(searchTerm.toLowerCase())){
                  return item
                }
              })
              .map((item)=>{
                return(
                  <tr className='real-data'>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.website}</td>
                    <td>{item.address.geo.lat}</td>
                    <td>{item.address.geo.lng}</td>
                 </tr>
                )
              })
            }
          </tbody>
        </table>
    </div>
  );
}

export default App;
