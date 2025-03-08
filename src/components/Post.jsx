import { RiEditFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
const Post = ({ title, content, editPost, id, deletePost }) => {
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{content}</td>
        <td>
          <button className="btn btn-success me-2" onClick={() => editPost(id)}>
            <RiEditFill />
          </button>
          <button className="btn btn-danger" onClick={() => deletePost(id)}>
            <MdDelete />
          </button>
        </td>
      </tr>
    </>
  );
};
export default Post;
