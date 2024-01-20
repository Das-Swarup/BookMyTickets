import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { searchMovie, upcomingMovies } from './src/api/apicall';

const App = () => {

  const [upcomingMovies2, setUpcomingMovies2] = useState<any>(undefined)
  
  const getUpcomingMovies = async () =>{
    try{
      await fetch(upcomingMovies).then(res=>res.json()
      ).then(res=>{return res}
      )
    }
    catch(e:any){
      console.log(e.message);
      
    }
  }

  useEffect(()=>{
    try{
      fetch(upcomingMovies).then(res=>res.json()
      ).then(res=>{setUpcomingMovies2(res.results);
      }
      )
    }
    catch(e:any){
      console.log(e.message);
      
    }
  },[])
  
  console.log(upcomingMovies2);
  

  
  return (
    <View>
      <Text>{upcomingMovies2[0].title}</Text>
      <Text>{upcomingMovies2[0].release_date}</Text>
      <Text>{upcomingMovies2[0].overview}</Text>
    </View>
  )
}

export default App