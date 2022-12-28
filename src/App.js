import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';



function App() {
  var [tokeni,setToken] = useState([])
  const [year,setYrs] = useState('2022')
  const [month,setMonth] = useState('august')
  const getYears = (e)=>{
    setYrs(e.target.value)
  }
  const getMonth = (e)=>{
    setMonth(e.target.value)
  }
  const [api,setApi] = useState([])
  
  var y2022 = ["june","july","august"]
  var y2021 = ["september","august","july"]
  var y2019 = ["april","august","march"]
  
  
  const fetchAll = () => {
    axios
      .get('https://63ac3cb4da81ba97617e1609.mockapi.io/token')
    .then( (response)=> {
      setToken(response.data)
    })
      axios
      .get('https://api.intra.42.fr/v2/campus/16/users?filter[pool_year]='+year+'&filter[pool_month]='+month+'&per_page=100&page=X&access_token='+tokeni[0].token)
    .then( (response)=> {
      setApi(response.data)
    })

}


  return (
    <div>
      <div className='bg-white flex place-content-center flex-wrap'>
        <div className='m-3'>
        <select value={year} id="countries" onChange={getYears} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>Choose a years</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2019">2019</option>
        </select>
        </div>
        <div className='m-3'>
    
        <select value={month} id="countries" onChange={getMonth} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>Choose a month</option>
        {(year == '2022'?y2022:year=="2021"?y2021:y2019).map((m)=>(
          <option value={m}>{m}</option>
          ))}
          </select> 
        </div>
        <div className='m-3'>
          <button onClick={fetchAll} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get Pooler</button>
        </div>
      </div>
    <div className="App flex flex-wrap place-content-center bg-gray-400">
      {api.map((a)=>(
    <div class="shadow-lg m-5  w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-end px-4 pt-4">
    </div>
    <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={a.image.versions.large} alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{a.displayname}</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">{a.login}</span>
        <div class="flex mt-4 space-x-3 md:mt-6">
            <a href={"https://profile.intra.42.fr/users/"+a.login} class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Show intra</a>
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Show Static</a>
        </div>
    </div>
</div>

))}
    </div>
    </div>
  );
}

export default App;
