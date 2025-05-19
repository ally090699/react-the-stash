import './PostCard.css';

export default function PostCard(props){
    const preview = props.description.slice(0, 50) + (props.description.length>50 ? '...' : '');
    return(
        <div id={props.id} className="card">
            <img className="card-img" src={props.img} alt={`Crochet ${props.name}`}/>
            <div className='hidden details'>
                <h3>{props.date}</h3>
                <h3 className="card-title">{props.name}</h3>
                {props.tags.map((tag)=> (
                    <div>{tag}</div>
                ))}
            </div>
            
        </div>
    );
}