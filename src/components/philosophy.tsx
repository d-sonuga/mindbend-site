import {Timeline, TimelineEvent} from 'react-event-timeline'
import OneSvg from './one-svg'
import './philosophy.css'


const Philosophy = () => {
    return(
        <div id='philosophy'>
            <h3>The mindbend Philosophy</h3>
            <Timeline
                lineColor='#f49831'>
                <TimelineEvent
                    iconStyle={{cursor: 'default'}}
                    iconColor='#8b0000'
                    className='philosophy-item'
                    title='Only the strong survive'
                    icon={<OneSvg />} />
                <TimelineEvent
                    iconStyle={{cursor: 'default'}}
                    iconColor='#8b0000'
                    className='philosophy-item'
                    title='Optimize as you write' />
                <TimelineEvent
                    iconStyle={{cursor: 'default'}}
                    iconColor='#8b0000'
                    className='philosophy-item'
                    title='Comments are for whimps' />
            </Timeline>
        </div>
    );
}

export default Philosophy