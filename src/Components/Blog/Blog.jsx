import PropTypes from 'prop-types';
import { FaRegBookmark} from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmark }) => {
    const { title, cover, author, author_img, reading_time, posted_date, hashtags } = blog;

    return (
        <div className='mb-20'>

            <img className='w-full border-cyan-200 rounded-lg mb-8' src={cover} alt={`Cover Picture Of The Title: ${title}`} />

            <div className='flex justify-between mb-5'>

                <div className='flex'>
                    <img className='w-14' src={author_img} />
                   
                    <div className='ml-6'>
                        <h3 className='text-2xl font-bold text-slate-800'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>

                <div >
                    <span>{reading_time}  min read</span>
                    <button 
                    onClick={()=>handleAddToBookmark(blog)}
                    className='ml-2 text-2xl'>
                        <FaRegBookmark></FaRegBookmark>
                        </button>
                </div>

            </div>

            <h2 className='text-3xl font-bold text-indigo-600'>{title}</h2>
            <p className='text-gray-500'>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired

}

export default Blog;