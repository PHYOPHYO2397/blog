import { GrUpdate } from "react-icons/gr";
import { MdOutlineCancel } from "react-icons/md";
const Edit = ({
  title,
  content,
  saveTitleToState,
  saveContentToState,
  updatePost,
  cancelEdit,
}) => {
  return (
    <>
      <form className="bg-light w-50 mx-auto p-5">
        <h1 className="text-center">Edit Post</h1>
        <input
          defaultValue={title}
          type="text"
          placeholder="title"
          onChange={saveTitleToState}
          className="form-control mb-2"
        />
        <br />
        <br />
        <textarea
          defaultValue={content}
          placeholder="contents"
          onChange={saveContentToState}
          className="form-control mb-2"
        ></textarea>
        <br />
        <br />

        <button className="btn btn-primary me-2" onClick={updatePost}>
          <GrUpdate /> Update Post
        </button>
        <button className="btn btn-secondary " onClick={cancelEdit}>
          <MdOutlineCancel />
          Cancel Post
        </button>
      </form>
    </>
  );
};
export default Edit;
