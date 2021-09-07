import { Empty } from 'antd';
import { useState } from 'react';

export default function FeedPage() {

  const [events, setEvents] = useState([]);

  if (events.length === 1) {
  return (
    <div className="Feed">
      2333
    </div>
  )
  }

  return (
    <Empty 
    className='Empty'
    description='Nothing To Do'/>
  )
  }