import { Button, Empty } from 'antd';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Card } from 'antd';
import { Radio } from 'antd';

export default function MainPage() {

  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    
    let len = localStorage.length;  
    console.log(len) 
    let arr = []; 
    
    for(let i = 0; i < len; i++) {
        
      let getKey = localStorage.key(i) || "";

      let getVal = JSON.parse(localStorage.getItem(getKey) || '');

      arr[i] = {
        'key': getKey,
        'val': getVal,
      }

    }
    
    let todoList: any = []

    for(let i = 0; i < arr.length; i++) {
        
      if (isNaN(parseInt(arr[i].key)) === false) {
        todoList.push(arr[i].val)
      }

    }
    console.log(todoList)

    setEvents(todoList);
    
  }, [])

  function Cards() {
    
    const FormList = events.map((event) => {
      
      function handleFinished() {

        if (event.Finished === "true") {
          event.Finished = "false";
          console.log('hahaha')
          localStorage.setItem(event.Token, JSON.stringify(event))
        } else {
          event.Finished = "true";
          console.log('haha')
          localStorage.setItem(event.Token, JSON.stringify(event))
        }

      };
  
      console.log(event.Token)

      let style = {}
      
      if (event.Finished === "true") {
        style = { width: 300, height: 200, border: '1px solid blue'};
      } else if (event.Priority === true) {
        style = { width: 300, height: 200, border: '1px solid red'};
      } else {
        style = { width: 300, height: 200 };
      }

      return (
        <Card 
        className="feedCard"
        id={event.Token} 
        title={event.Due} 
        extra={<Button type="text" danger>Delete</Button>} 
        style={style}>
          <p>{event.Content}</p>
          <Radio onChange={handleFinished} defaultChecked={event.Finished === "true" ? true : false}>Finished</Radio>
        </Card>
      )
    })

    return (
      <div className="Feed">
        {FormList}
      </div>
    )
  }

  if (events.length !== 0) {
    return (
      <div className="App">
        <Header></Header>
        <Cards/>
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
