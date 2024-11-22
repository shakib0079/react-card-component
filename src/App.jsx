import './App.css'
import Card from './Component/Card'
import { data } from './assets/data.js'

function App() {



  return (
    <>
      <div className="container">
        {data.map((card) => <Card image={card.cardImg} content={card.cardContent} userImg={card.cardUserImg} name={card.name} date={card.date}/>)}
      </div>
    </>
  )
}

export default App
