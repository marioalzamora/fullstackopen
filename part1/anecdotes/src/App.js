import { useState } from 'react'
import Text from './components/Text';

let max = 0;

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const points = { 
    '0': 0, 
    '1': 0, 
    '2': 0, 
    '3': 0, 
    '4': 0, 
    '5': 0, 
    '6': 0, 
    '7': 0 
  }

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(points)
  
  const setRandomAnecdote = () =>
  {
    let randomAnecdote = Math.floor(anecdotes.length * Math.random())
    setSelected(randomAnecdote)
  }
  
  // Update values
  const setVote = (selected) => {
    setVotes(prevValue => {
      return {...prevValue, [selected]: prevValue[selected] += 1 }
    }, selected)
  }

  // Find Max
  let arr = Object.values(votes);
  max = Math.max(...arr)
  
  return (
    <div>
      <Text title={"Anecdote of the Day"} />
      <div>{anecdotes[selected]}</div>
      <div>{"Has "+votes[selected]+" votes."}</div>

      <Button text={"Vote"} handleClick={() => setVote(selected)} />
      <Button text={"Next Anecdote"} handleClick={() => setRandomAnecdote()} />

      <Text title={"Anecdote with more votes: "} />
      <div>{anecdotes[arr.indexOf(max)]}</div>
      <div>{"Has : "+max+" votes"}</div>
    </div>
  )
}

export default App