const Total = (props) => {
    let total = 0;
  
    props['parts'].forEach(value => {
      total += value.exercises
    })

    return (
        <p>Total Number of exercises {total}</p>
    )
}

export default Total