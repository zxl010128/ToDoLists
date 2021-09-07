import { Layout, Menu, Dropdown } from 'antd';
import { DownCircleOutlined, AppstoreAddOutlined, SaveOutlined, RollbackOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const menu = () => {

  return (
    <Menu>
      <Menu.Item icon={<SaveOutlined />}>
        Save
      </Menu.Item>
      <Menu.Item icon={<AppstoreAddOutlined/>}>
        <Link to="/EventAdd">Add New Event</Link>
      </Menu.Item>
      <Menu.Item icon={<RollbackOutlined/>}>
        <Link to="/">Back To MainPage</Link>
      </Menu.Item>
    </Menu>
  );

}

  
function currentTime(): string {
  let currTime = new Date();
  let currYear: string = currTime.getFullYear().toString();
  let currMonth: string = (currTime.getMonth() + 1).toString();
  let currDate: string = currTime.getDate().toString();
  let currHour: string = currTime.getHours().toString();
  let currMin: string = currTime.getMinutes().toString();
  let currDayName: string = numberToDayName(currTime.getDay());

  currMonth = addZeroForTime(currMonth);
  currDate = addZeroForTime(currDate);
  currHour = addZeroForTime(currHour);
  currMin = addZeroForTime(currMin);

  if (window.innerWidth < 700) {
    return `${currHour}:${currMin}`
  }

  return `${currYear}.${currMonth}.${currDate} ${currDayName} ${currHour}:${currMin}`
}

function numberToDayName(num: number):string {
  switch(num) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
  }
  return 'Unknown'
}

function addZeroForTime(num: string): string {
  if (parseInt(num) < 10) {
    return '0'+num
  }

  return num
}
export default function Headers() {

  const [time, setTime] = useState('')

  useEffect(() => {
    setInterval(() => {
      let currTime: string = currentTime();
      setTime(currTime);
    }, 1000);
  }, []);

  const Header = Layout
  
  return (
    <Layout>
      <Header className="header">
        <Menu theme="dark" mode="horizontal">
          <Dropdown className="dropDownIcon" overlay={menu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              <DownCircleOutlined />
            </a>
          </Dropdown>
          <p className="Title">To-Do List</p>
          <span className="Time">{time}</span>
        </Menu>
      </Header>
    </Layout>

  )
}