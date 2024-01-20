import Box from "./Box"
import '../Styles/ColorBox.css'

function ColorBox(props){
    const {num} = props
    const array = []
    for(let i = 0; i < num; i++)   array.push(i)
   

    return(
        <div className="ColorBox">
            {array.map((num) => {
                return <Box />
            })}
        </div>
    )
}

export default ColorBox