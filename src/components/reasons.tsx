import ReasonCard from './reason-card'
import confusionImg from './confusion.png'
import frustrationImg from './frustration.png'
import mentallyTaskingImg from './mentally-tasking.png'
import './reasons.css'


const Reasons = () => {
    return(
        <div id='reasons'>
            <h3>Why mindbend?</h3>
            <div>
                <ReasonCard
                    image={confusionImg}
                    title='Cryptic Compiler Errors'
                    content='Error messages so opaque, you barely make any progress' />
                <ReasonCard
                    image={frustrationImg}
                    title='Frustration Guaranteed'
                    content='Desire to punch your computer screen in just a few minutes' />
                <ReasonCard
                    image={mentallyTaskingImg}
                    title='Mentally Tasking for Even the Most Trivial Things'
                    content='Wrench your brain over the minutest of things, for no good reason whatsoever!' />
            </div>
        </div>
    )
}

/*
frustration guaranteed
intense use of the mind for the most trivial of tasks
*/

export default Reasons