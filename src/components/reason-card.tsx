const ReasonCard = ({image, title, content}: {image: any, title: string, content: string}) => {
    return(
        <div className='reason-card'>
            <img src={image} width='100' height='100' />
            <h4>{title}</h4>
            <p>{content}</p>
        </div>
    )
}


export default ReasonCard