import { Avatar } from "@mui/material";
import "./Post.css";
import InputOption from "./InputOption";
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from "@mui/icons-material";

const Post = ({ name, description, message, photoUrl }) => {
    return ( 
        <div className="post" >
            <div className="post__header">
                <Avatar />
                <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
                </div>
            </div>

            <div className="post__body">
                <p>{message}"</p>
            </div>

            <div className="post__buttons">
                <InputOption Icon={ThumbUpAltOutlined} title="Like"
                color="gray" />
                <InputOption Icon={ChatOutlined} title="Chat"
                color="gray" />
                <InputOption Icon={ShareOutlined} title="Share"
                color="gray" />
                <InputOption Icon={SendOutlined} title="Send"
                color="gray" />
            </div>
        </div>
     );
}
 
export default Post;