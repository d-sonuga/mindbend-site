import Heading from './components/heading'
import Reasons from './components/reasons'
import Philosophy from './components/philosophy'
import Download from './components/download'
import './style.css'

const Site = () => {
    return(
        <div>
            <Heading />
            <Reasons />
            <Philosophy />
            <Download />
        </div>
    )
}

export default Site