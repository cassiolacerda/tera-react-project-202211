import React from "react";
import { useParams } from "react-router-dom";

import Default from "../templates/Default";
import UserBio from "../molecules/UserBio";
import PostListWrapper from "../molecules/PostListWrapper";

export default function UserBlog() {
  const { userId } = useParams();

  const [user, setUser] = React.useState({});
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    const getApiData = async () => {
      const [userResponse, postsResponse] = await Promise.all([
        fetch(
          `https://63cf09718a780ae6e6710dbe.mockapi.io/users/${userId}`
        ).then((response) => response.json()),
        fetch(
          `https://63cf09718a780ae6e6710dbe.mockapi.io/users/${userId}/posts`
        ).then((response) => response.json()),
      ]);

      setUser(userResponse);
      setPosts(postsResponse);
    };

    getApiData();
  }, [userId]);

  return (
    <Default>
      <div className="user-blog">
        <UserBio user={user} />
        <PostListWrapper posts={posts} />
      </div>
    </Default>
  );
}
