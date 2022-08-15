import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        key: 1,
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        key: 2,
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        key: 3,
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

export default App