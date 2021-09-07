import { Empty } from 'antd';
import { useEffect, useState } from 'react';
import Header from '../components/Header';

export default function MainPage(props: any) {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    
    let len = localStorage.length;  
    console.log(len) 
    let arr = []; 
    
    for(let i = 0; i < len; i++) {
        
      let getKey = localStorage.key(i) || "";

      let getVal = localStorage.getItem(getKey);

      arr[i] = {
        'key': getKey,
        'val': getVal,
      }

    }
    
    let todoList = []

    for(let i = 0; i < arr.length; i++) {
        
      if (isNaN(parseInt(arr[i].key)) === false) {
        todoList.push(arr[i].val)
      }

    }
    console.log(todoList)
    
  }, [])

  if (events.length !== 0) {
    return (
      <div className="App">
        <Header></Header>
        <div className="Feed">
          2333
        </div>
      </div>

    )
  }

  return (
    <div className="App">
      <Header></Header>
      <Empty 
      className='Empty'
      description='Nothing To Do'/>
    </div>

  )

}
