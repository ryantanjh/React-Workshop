import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { addBlog, deleteBlog } from "../actions";

const Blogpage = () => {
  const blogs = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const addPost = () => {
    dispatch(addBlog(value));
    setValue("");
  };

  const deletePost = (i) => {
    dispatch(deleteBlog(i));
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <NavBar />
      <h1>Blog</h1>
      <input type="text" value={value} onChange={handleChange} />
      <button onClick={addPost}>Add blog</button>
      {blogs.map((blog, i) => {
        return (
          <div key={i}>
            <h3>{blog.title}</h3>
            <button onClick={() => deletePost(i)}>delete</button>
          </div>
        );
      })}
    </>
  );
};

export default Blogpage;
