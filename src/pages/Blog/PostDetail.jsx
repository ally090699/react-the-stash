import allblogs from "./data/allblogs";
import { useParams } from "react-router-dom";
import './PostDetail.css';

export default function PostDetail(){
    const {id} = useParams();
    const post = allblogs.find((blog) => String(blog.id) === id);

    function formatDate(dateString) {
        const [month, day, year] = dateString.split('-').map(Number);
        const date = new Date(year, month - 1, day);
        
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
    return(
        <div className="flex-row">
            <div className="image">
                <img src={post.img} alt={`${post.category} Post - ${post.name}`}/>
            </div>
            <div className="flex-col">
                <p>Name: {post.name}</p>
                <p>Date Posted: {formatDate(post.date)}</p>
                <p>Category: {post.category}</p>
                <p>Tags:</p> 
                <div className="gallery">
                    {post.tags.map((tag) => (
                        <p className="tag">{tag}</p>
                    ))}
                </div>
                
                <p>{post.description}</p>
            </div>
            
        </div>
    )
}