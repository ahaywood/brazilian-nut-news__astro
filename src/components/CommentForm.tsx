import React from "react";

interface Props {
  close: () => void;
  linkId: string;
  parentCommentId?: string;
}

const CommentForm = ({ close, linkId, parentCommentId }: Props) => {
  return <div>CommentForm</div>;
};

export default CommentForm;
