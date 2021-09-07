import { Empty } from 'antd';
import { useState } from 'react';
import Header from '../components/Header';

export default function MainPage(props: any) {

  const [events, setEvents] = useState([]);

  if (props.location.query !== undefined) {
    var data = props.location.query;
    var {Priority, Notification, Content, Due} = data;
  
  }

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
