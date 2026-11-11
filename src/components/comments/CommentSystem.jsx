import React, { useState } from 'react';
import { mockComments } from '../../data/mockComments';

function CommentNode({ comment, depth = 1 }) {
  const [likes, setLikes] = useState(comment.likes);
  const [dislikes, setDislikes] = useState(comment.dislikes);
  const [replies, setReplies] = useState(comment.replies);
  const [isReplying, setIsReplying] = useState(false);
  const [replyText, setReplyText] = useState('');

  const handleReply = () => {
    if (!replyText.trim()) return;
    const newReply = {
      id: Date.now(),
      author: 'Ви',
      text: replyText,
      timestamp: new Date().toISOString(),
      likes: 0,
      dislikes: 0,
      replies: []
    };
    setReplies([...replies, newReply]);
    setReplyText('');
    setIsReplying(false);
  };

  const dateStr = new Date(comment.timestamp).toLocaleString('uk-UA', { dateStyle: 'short', timeStyle: 'short' });

  return (
    <div className={`comment-node depth-${depth}`}>
      <div className="comment-box">
        <div className="comment-header">
          <strong>{comment.author}</strong> <span className="comment-date">{dateStr}</span>
        </div>
        <p className="comment-text">{comment.text}</p>
        <div className="comment-actions">
          <button className="btn btn--small" onClick={() => setLikes(l => l + 1)}>👍 {likes}</button>
          <button className="btn btn--small" onClick={() => setDislikes(d => d + 1)}>👎 {dislikes}</button>
          {depth < 3 && (
            <button className="btn btn--small" onClick={() => setIsReplying(!isReplying)}>Відповісти</button>
          )}
        </div>
        
        {isReplying && (
          <div className="comment-reply-form">
            <input 
              type="text" 
              value={replyText} 
              onChange={e => setReplyText(e.target.value)} 
              placeholder="Ваша відповідь..." 
              className="input-field" 
            />
            <button className="btn btn--small" onClick={handleReply}>OK</button>
          </div>
        )}
      </div>
      
      {replies.length > 0 && (
        <div className="comment-children">
          {replies.map(reply => (
            <CommentNode key={reply.id} comment={reply} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export function CommentSystem() {
  return (
    <div className="section">
      <h2 className="section__title">05 / Система коментарів (Рекурсія)</h2>
      <div className="comments-wrapper">
        {mockComments.map(c => (
          <CommentNode key={c.id} comment={c} depth={1} />
        ))}
      </div>
    </div>
  );
}
