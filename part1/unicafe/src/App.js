import { useState } from 'react'
import Text from './components/Text'
import StatisticsLine from './components/StatisticsLine'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) =>{
  if(total > 0)
  {
    return <>
      {
        props['values'].map(({key, text, value}) => 
            <StatisticsLine 
                key={key}
                text={text}
                value={value}
            />
        )
      }
    </>
  }

  return <>
    <b>No feedback given</b>
  </>
}

let total = 0;
let average = 0;
let positive = 0;

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  total = good + bad + neutral;
  positive = good  > 0 ? (good * 100) / total : 0
  average = good  > 0 ? (good - bad) / total : 0

  const statistics = [
    {
      key: 1,
      text: "Good: ",
      value: good
    },
    {
      key: 2,
      text: "Neutral: ",
      value: neutral
    },
    {
      key: 3,
      text: "Bad: ",
      value: bad
    },
    {
      key: 4,
      text: "All: ",
      value: total
    },
    {
      key: 5,
      text: "Average: ",
      value: average
    },
    {
      key:6,
      text: "Positive: ",
      value: positive + " %"
    }
  ]

  const setValue = (newValue, keyword) => {
    switch (keyword) {
      case "Good":
        setGood(newValue)
      break;

      case "Neutral":
        setNeutral(newValue)
      break;

      default:
        setBad(newValue)
      break;
    }
  }  
        
  return (
    <>
      <Text title="Give Feedback" />
      <Button handleClick={() => setValue((good + 1), "Good")} text="Good" />
      <Button handleClick={() => setValue((neutral + 1), "Neutral")} text="Neutral" />
      <Button handleClick={() => setValue((bad + 1), "Bad")} text="Bad" />
      <Text title="Statistics" />
      <table>
        <tbody>
          <Statistics values={statistics} total={total}/>
        </tbody>
      </table>
    </>
  )
}

export default App