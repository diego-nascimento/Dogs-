import UserPost from './endPoints/UserPost/UserPost';

import TokenPost from './endPoints/TokenPost/TokenPost';

import PhotoPost from './endPoints/PhotoPost/PhotoPost';

import PhotoGet from './endPoints/PhotoGet/PhotoGet';

const Api = () => {
  return (
    <div>
      <h2>UserPost</h2>
      <UserPost />

      <h2>TokenPost</h2>
      <TokenPost />

      <h2>PhotoPost</h2>
      <PhotoPost />

      <h2>PhotoGet</h2>
      <PhotoGet />
    </div>
  );
};

export default Api;
