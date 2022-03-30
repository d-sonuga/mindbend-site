import './heading.css'
import ArrowDown from './arrow-down'


const Heading = () => {
    return(
        <div id='heading-container'>
            <div id='heading-content'>
                <h1>mindbend</h1>
                <p>The esoteric language for real programmers</p>
                <ArrowDown />
            </div>
            <div id='heading-image'>
            </div>
        </div>
    )
}

export default Heading