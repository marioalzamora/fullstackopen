import Part from './Part'

const Content = (props) => {
    return <>
    {
        props['parts'].map(({key, name, exercises}) => 
            <Part 
                key={key}
                name={name} 
                exercises={exercises} 
            />
        )
    }
    </>
}

export default Content