import { DatePicker, Space, Checkbox, Button, Input } from 'antd';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

export default function EventAdd() {

  const [Priority, setPriority] = useState(false);  //记录此事件的重要程度
  const [Notification, setNotification] = useState(false);  //记录此事件是否需要due前提醒
  const [Content, setContent] = useState(''); //记录此事件的内容
  const [Due, setDue] = useState('')  //记录此事件的结束时间
  let history = useHistory();

  function handlePriorityChange() {

    if (Priority === false) {
      setPriority(true);
    } else {
      setPriority(false);
    }

  }

  function handleNotificationChange() {

    if (Notification === false) {
      setNotification(true);
    } else {
      setNotification(false);
    }

  }

  function handleDateChange(value: any, dateString: string) {
    setDue(dateString);
  }

  function handleConfirm() {

    if (Content === '' || Due === '') {
      alert("Please enter the Content and Due Date at least!");
    } else {
      let tokenId: string = tokenGenerate().toString();
      let data = {Token: tokenId, Finished: false, Priority: Priority, Notification: Notification, Content: Content, Due: Due};
      localStorage.setItem(tokenId, JSON.stringify(data));
    }
    
    history.push('/');
  }

  //为每一个事件获取一个token
  function tokenGenerate(): number {
    return Math.floor(Math.random() * 10000) + 1;
  }

  return (

    <div className = "InformationBox">
      <div className="InfoSmallBox">
        <p>Content</p>
        <Input 
        placeholder="TO-DO" 
        className='inputContent' 
        onChange={(event) => setContent(event.target.value)}
        />
      </div>
      <div className="InfoSmallBox">
        <p>Due Date</p>
        <Space direction="vertical" size={12}>
          <DatePicker 
          showTime 
          onChange={ handleDateChange }
          />
        </Space>
      </div>
      <div className="InfoSmallBox">
        <Checkbox onChange={ handlePriorityChange }>High Priority</Checkbox>
        <Checkbox onChange={ handleNotificationChange }>Notification</Checkbox>
      </div>  
      <div className="InfoSmallBox">
        <Button type="primary" className="clickButton" onClick={ () => {handleConfirm()} }>Confirm</Button>
        <Button danger className="clickButton">
          <Link to="/">Cancel</Link>
        </Button>
      </div>

    </div>
  )
}