import { IoIosAddCircle } from "react-icons/io";

const Create = ({
  titleRef,
  contentRef,
  saveTitleToState,
  saveContentToState,
  savePost,
}) => {
  return (
    <>
      <form className="bg-light w-50 mx-auto p-5">
        <h1 className="text-center">Create New Post</h1>
        <input
          type="text"
          ref={titleRef}
          className="form-control mb-2"
          placeholder="title"
          onChange={saveTitleToState}
        />
        <textarea
          className="form-control mb-2"
          ref={contentRef}
          placeholder="content"
          onChange={saveContentToState}
        ></textarea>
        <button className="btn btn-primary" onClick={savePost}>
          <IoIosAddCircle /> Create Post
        </button>
      </form>
    </>
  );
};
export default Create;
