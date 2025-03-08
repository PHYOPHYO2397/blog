import React, { useEffect, useState, useRef } from "react";
import Create from "./Create";
import Post from "./Post";
import Edit from "./Edit";
import { IoIosAddCircle } from "react-icons/io";


const List = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([{ id: 1, title: "t1", content: "c1" }]);
  const [isCreate, setIsCreate] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEdititId] = useState("");

  function toggleCreate() {
    setIsCreate(!isCreate);
  }

  function toggleEdit() {
    setIsEdit(!isEdit);
  }

  function editPost(id) {
    setEdititId(id);
    toggleEdit();
  }

  useEffect(() => console.log(posts), [posts]);
  //useEffect(() => console.log(editId), [editId]);
  //useEffect(() => console.log(deleteId), [deleteId]);

  const titleRef = useRef(null);
  const contentRef = useRef(null);

  function saveTitleToState(e) {
    setTitle(e.target.value);
  }

  function saveContentToState(e) {
    setContent(e.target.value);
  }

  function savePost(e) {
    e.preventDefault();
    console.log("Post Saved");
    const id = Date.now();
    setPosts([...posts, { id, title, content }]);
    titleRef.current.value = "";
    contentRef.current.value = "";
    titleRef.current.focus();
    toggleCreate();
  }

  function updatePost(e) {
    e.preventDefault();
    console.log("Post Updated");
    const updatePosts = posts.map((post) => {
      if (post.id == editId) {
        return {
          ...post,
          title: title || post.title,
          content: content || post.content,
        };
      } else {
        return post;
      }
    });
    setPosts(updatePosts);
    toggleEdit();
  }

  function cancelEdit(e) {
    toggleEdit();
  }

  function deletePost(id) {
    var result = confirm("Do You Want to delete?");
    if (result == true) {
      const deletePosts = posts.filter((post) => {
        return post.id !== id;
      });
      setPosts(deletePosts);
    }
  }

  if (isCreate) {
    return (
      <Create
        saveTitleToState={saveTitleToState}
        saveContentToState={saveContentToState}
        savePost={savePost}
        titleRef={titleRef}
        contentRef={contentRef}
      />
    );
  } else if (isEdit) {
    const post = posts.find((post) => {
      return post.id == editId;
    });

    return (
      <Edit
        title={post.title}
        content={post.content}
        saveTitleToState={saveTitleToState}
        saveContentToState={saveContentToState}
        updatePost={updatePost}
        cancelPost={cancelEdit}
      />
    );
  } else {
    return (
      <div className="container text-center bg-light p-5  ">
        <h1 className="text-center mb-3">All Posts</h1>

        {!posts.length ? (
          <div>
            <h3>There is nothing to see here!</h3>
          </div>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Ttile</th>
                <th>Content</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => {
                return (
                  <Post
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    content={post.content}
                    editPost={editPost}
                    deletePost={deletePost}
                  />
                );
              })}
            </tbody>
          </table>
        )}

        <button className="btn btn-primary " onClick={toggleCreate}>
          <IoIosAddCircle />
          Create New Post
        </button>
      </div>
    );
  }

  // return (
  //   <>
  //     {isCreate ? (
  //       <Create
  //         saveTitleToState={saveTitleToState}
  //         saveContentToState={saveContentToState}
  //         savePost={savePost}
  //         titleRef={titleRef}
  //         contentRef={contentRef}
  //       />
  //     ) : (
  //       <>
  //         <h1>All Posts</h1>

  //         {!posts.length ? (
  //           <div>
  //             <h3>There is nothing to see here!</h3>
  //           </div>
  //         ) : (
  //           posts.map((post) => {
  //             return (
  //               <Post
  //                 key={post.id}
  //                 id={post.id}
  //                 title={post.title}
  //                 content={post.content}
  //               />
  //             );
  //           })
  //         )}

  //         <button className="btn btn-primary" onClick={toggleCreate}>
  //           Create New Post
  //         </button>
  //       </>
  //     )}
  //   </>
  // );
};

export default List;
