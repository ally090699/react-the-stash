import PostCard from '../../components/PostCard.jsx';
import blogs from './data/allblogs.jsx';
import {Link} from 'react-router-dom';

export default function Embroidery(){
    const embroidery = blogs.filter((post)=>post.category==="Embroidery");

    return(
        <main>
            <h1>Embroidery Blog</h1>

            <div className='gallery'>
                {embroidery.slice().reverse().map((post)=> (
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