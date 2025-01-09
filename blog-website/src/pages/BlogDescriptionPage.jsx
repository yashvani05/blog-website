import { setSelectedBlog, setSelectedBlogById } from '@/redux/blogAction/blogAction';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
const BlogDescriptionPage = () => {
    const selectedBlogById = useSelector((state) => state.selectedBlogById);
    const { blogId } = useParams(); 
    const dispatch = useDispatch();

    useEffect(() => {
        if (!selectedBlogById) {
            dispatch(setSelectedBlogById(blogId));
        }
    }, [dispatch, blogId, selectedBlogById]);

    if (!selectedBlogById) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold">{selectedBlogById.title}</h1>
            <p className="text-sm text-gray-500">
                {selectedBlogById.username} • {new Date(selectedBlogById.date).toLocaleDateString()}
            </p>
            <div className="mt-4 text-gray-700">{selectedBlogById.description}</div>
            <div className="mt-4 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque tempore at sit? Temporibus enim esse commodi, quam iste facilis quis delectus doloremque officiis sequi iure illum necessitatibus, harum quisquam suscipit?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error in, itaque adipisci fuga perferendis eius quia natus nobis, enim libero iusto tempora doloribus ducimus incidunt molestias maiores, ullam excepturi tenetur?</div>
        </div>
    );
};

export default BlogDescriptionPage;
