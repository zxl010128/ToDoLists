import Header from '../components/Header';
import EventModify from '../components/EventModify';

export default function EventModifyPage(props: any) {

  const tokenId = props.match.params.tokenId
  console.log(tokenId)

  return(
    <div className="App">
      <Header></Header>
      <div className="EventPage">
        <EventModify tokenId={tokenId}></EventModify>
      </div>
    </div>
  )
}


