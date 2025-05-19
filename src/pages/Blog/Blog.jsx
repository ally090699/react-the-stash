import PostCard from '../../components/PostCard.jsx';
import blogs from './data/allblogs.jsx';
import {Link} from 'react-router-dom';
import './Blog.css';

export default function Blog(){
    return(
        <main>
            <h1>All Blogs</h1>

            <div className='gallery'>
                {blogs.slice().reverse().map((post)=> (
                    <Link className="link" to={`/blog/${post.id}`} key={post.id}>
                        <PostCard
                        key={post.key}
                        id={post.id}
                        img={post.img}
                        name={post.name}
                        category={post.category}
                        description={post.description}
                        date={post.date}
                        tags={post.tags}
                        featured={post.featured}
                        />
                    </Link>
                ))}
            </div>
        </main>
    );
}