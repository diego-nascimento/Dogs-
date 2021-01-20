import React from 'react';
import { UserContext } from '../../../UserContext';
import PhotoComentsForm from '../PhotoComentsForm/PhotoComentsForm';
import { Comment } from './PhotoComents.style';

const PhotoComents = (props) => {
  const { login } = React.useContext(UserContext);
  const commentsSection = React.useRef(null);
  const [comments, setComments] = React.useState(() => {
    return props.comments;
  });

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <Comment ref={commentsSection}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </Comment>
      {login && <PhotoComentsForm id={props.id} setComments={setComments} />}
    </>
  );
};

export default PhotoComents;
