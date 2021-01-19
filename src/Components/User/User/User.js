import React from 'react';
import { Route, Routes } from 'react-router';
import UserHeader from '../UserHeader/UserHeader';
import UserPhotoPost from '../UserPhotoPost/UserPhotoPost';
import UserStats from '../UserStats/UserStats';

import Feed from '../../Feed/Feed/Feed';

const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatistica" element={<UserStats />} />
      </Routes>
    </section>
  );
};

export default User;
