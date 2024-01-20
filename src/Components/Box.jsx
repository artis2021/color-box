import { useState } from 'react'
import '../Styles/Box.css'

function Box(){
    const [color, setColor] = useState('red')
    function clickHandle(){
        
        const r = Math.floor(Math.random()*256)
        const g = Math.floor(Math.random()*256)
        const b = Math.floor(Math.random()*256)

        setColor(`rgb(${r}, ${g}, ${b})`)
        
        
    }
    return <div className="Box"  onMouseOver={clickHandle}  style={{
        backgroundColor: color
    }}></div>
}

export default Box