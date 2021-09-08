import { Button, Empty, Card, Radio } from 'antd';
import { useEffect, useState } from 'react';
import Header from '../components/Header';

export default function MainPage() {

  const [events, setEvents] = useState<any[]>([]); //记录所有的todo事件
  const [countChange, setCount] = useState(1);  //记录变换次数来进行渲染

  useEffect(() => {
    
    // 将存在localstorage里面所有的数据转出 
    let arr = []; 
    
    for(let i = 0; i < localStorage.length; i++) {
        
      // ？可能有更好的解决办法
      let getKey = localStorage.key(i) || "";
      let getVal = JSON.parse(localStorage.getItem(getKey) || '');

      arr[i] = {
        'key': getKey,
        'val': getVal,
      }

    }
    
    //将里面不需要的数据清除
    let todoList: any = []
    for(let i = 0; i < arr.length; i++) {
      if (isNaN(parseInt(arr[i].key)) === false) {
        todoList.push(arr[i].val)
      }

    }

    // 将list里面的内容按照时间进行排序
    if (todoList.length > 1) {
      for (let i = 0; i < todoList.length - 1; i++) {
        for(let j = 0; j < todoList.length - i - 1; j++) {
          if (Date.parse(todoList[j].Due) > Date.parse(todoList[j+1].Due)) {
            let swap = todoList[j+1];
            todoList[j+1] = todoList[j];
            todoList[j] = swap
          }
        }
      }
    };

    console.log(todoList);

    setEvents(todoList);
    
  }, [countChange])

  function Cards() {
    
    //FeedCard制作
    const FormList = events.map((event) => {

      // 处理Finished Radio同时对存储信息进行更改
      function handleFinished() {

        if (event.Finished === true) {
          event.Finished = false;
          localStorage.setItem(event.Token, JSON.stringify(event));
          setCount(e => e + 1);
        } else {
          event.Finished = true;
          localStorage.setItem(event.Token, JSON.stringify(event));
          setCount(e => e + 1);
        }

      };

      // 处理删除键，重新渲染更新的部件
      function handleDeleteButton() {
        localStorage.removeItem(event.Token);
        setCount(e => e + 1);
      }
  
      // 针对事件的不同情况给予其不同的外观
      // 红色：紧急事件
      // 蓝色：已完成事件
      // 0.5透明：事件已过期
      let style = {}
      let reminder: string = "Finished";
      if (event.Finished === true) {
        style = { width: 300, height: 200, border: '2px solid blue'};
      } else if (Date.parse(event.Due) < Date.now()){
        style = { width: 300, height: 200, opacity: '0.5'};
        reminder = "It has been expired";
      } else if (event.Priority === true) {
        style = { width: 300, height: 200, border: '2px solid red'};
      } else {
        style = { width: 300, height: 200, border: '1px solid black' };
      }

      return (
        <Card 
        key={event.Token}
        className="feedCard"
        title={event.Due} 
        extra={<Button type="text" danger onClick={handleDeleteButton} className='deleteButton'>Delete</Button>} 
        style={style}>
          <p>{event.Content}</p>
          <Radio onChange={handleFinished} defaultChecked={event.Finished === true ? true : false}>{reminder}</Radio>
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

  // 当事件不存在时，显示Empty界面
  return (
    <div className="App">
      <Header></Header>
      <Empty 
      className='Empty'
      description='Nothing To Do'/>
    </div>

  )

}
