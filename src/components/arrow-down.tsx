import {useState} from 'react'
import {Link} from 'react-scroll'

const ArrowDown = () => {
    const [color, setColor] = useState('#fff');
    const [margin, setMargin] = useState(0);
    return(
        <Link
            to='reasons'
            spy={true}
            smooth={true}
            duration={500}
        >
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
            width="70px" height="100px" viewBox="0 0 201.458 201.457"
            style={{cursor: 'pointer', paddingTop: margin}}
            onMouseOver={() => {
                setColor('#ff2052');
                setMargin(10);
            }}
            onMouseLeave={() => {
                setColor('#fff');
                setMargin(0);
            }}>
        <g>
            <path style={{fill: color}} d="M193.177,46.233l8.28,8.28L100.734,155.241L0,54.495l8.28-8.279l92.46,92.46L193.177,46.233z"/>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        </svg>
        </Link>
    );
}


export default ArrowDown