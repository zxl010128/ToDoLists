import { Input } from 'antd';
import { DatePicker, Space, Checkbox, Button } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function EventAdd() {

  const [Priority, setPriority] = useState(false);
  const [Notification, setNotification] = useState(false);
  const [Content, setContent] = useState('');
  const [Due, setDue] = useState('')

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
    }
    console.log(Priority, Notification, Content, Due)

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