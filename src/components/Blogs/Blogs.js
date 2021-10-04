import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Blog from '../Blog/Blog';
import './Blogs.css';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const url = './BlogsData.JSON';
        fetch(url)
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    return (
        <div className="my-5">
            <h2 className="my-5">Recent Blogs</h2>
            <Row xs={1} md={1} className="service-container g-4 img-fluid">
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                    ></Blog>)
                }
            </Row>

        </div>
    );
};

export default Blogs;