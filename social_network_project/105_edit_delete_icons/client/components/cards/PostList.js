import { useContext } from "react";
import renderHTML from "react-render-html";
import moment from "moment";
import { Avatar } from "antd";
import PostImage from "../images/PostImage";
import {
  HeartOutlined,
  HeartFilled,
  CommentOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { UserContext } from "../../context";

const PostList = ({ posts }) => {
  const [state] = useContext(UserContext);

  return (
    <>
      {posts &&
        posts.map((post) => (
          <div key={post._id} className="card mb-5">
            <div className="card-header">
              <Avatar size={40}>{post.postedBy.name[0]}</Avatar>{" "}
              <span className="pt-2 ml-3" style={{ marginLeft: "1rem" }}>
                {post.postedBy.name}
              </span>
              <span className="pt-2 ml-3" style={{ marginLeft: "1rem" }}>
                {moment(post.createdAt).fromNow()}
              </span>
            </div>
            <div className="card-body">{renderHTML(post.content)}</div>
            <div className="card-footer">
              {post.image && <PostImage url={post.image.url} />}

              <div className="d-flex pt-2">
                <HeartOutlined className="text-danger pt-2 h5 px-2" />
                <div className="pt-2 pl-3" style={{ marginRight: "1rem" }}>
                  3 likes
                </div>
                <CommentOutlined className="text-danger pt-2 h5 px-2" />
                <div className="pt-2 pl-3">2 comments</div>

                {state && state.user && state.user._id === post.postedBy._id && (
                  <>
                    <EditOutlined className="text-danger pt-2 h5 px-2 mx-auto" />
                    <DeleteOutlined className="text-danger pt-2 h5 px-2" />
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default PostList;
