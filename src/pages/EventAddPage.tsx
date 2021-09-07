import Header from '../components/Header';
import EventAdd from '../components/EventAdd';

export default function EventAddPage() {

  return(
    <div className="App">
      <Header></Header>
      <div className="EventPage">
        <EventAdd></EventAdd>
      </div>
    </div>
  )
}
