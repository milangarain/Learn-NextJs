"use client"
import { formatDate } from '@/lib/format';
import LikeButton from './like-icon';
import { togglePostLikeStatus } from '@/actions/posts';
import { useOptimistic } from 'react';

function Post({ post, updatePost }) {
  return (
    <article className="post">
      <div className="post-image">
        <img src={post.image} alt={post.title} />
      </div>
      <div className="post-content">
        <header>
          <div>
            <h2>{post.title}</h2>
            <p>
              Shared by {post.userFirstName} on{' '}
              <time dateTime={post.createdAt}>
                {formatDate(post.createdAt)}
              </time>
            </p>
          </div>
          <div>
            <form className={post.isLiked ? 'liked' : ''} action={updatePost.bind(null,post.id )}>
              <LikeButton />
            </form>
          </div>
        </header>
        <p>{post.content}</p>
      </div>
    </article>
  );
}

export default function Posts({ posts }) {
  if (!posts || posts.length === 0) {
    return <p>There are no posts yet. Maybe start sharing some?</p>;
  }
  const [optimisticPosts, updateOptimisticPosts] = useOptimistic(posts, (prevPosts, updatedPostId) => {
    const updatedPostIndex = prevPosts.findIndex(post => post.id === updatedPostId);
    
    const newPost = {...prevPosts[updatedPostIndex]};
    console.log(newPost, updatedPostIndex);
    
    const count = newPost.isLiked ? -1 : 1
    newPost.likes = newPost.likes + count;
    newPost.isLiked = !newPost.isLiked;
    const newPosts = [...prevPosts]
    newPosts[updatedPostIndex] = newPost;
    
    return newPosts;
  })

  async function updatePost(postId) {
    updateOptimisticPosts(postId);
    await togglePostLikeStatus(postId);
  }

  return (
    <ul className="posts">
      {optimisticPosts.map((post) => (
        <li key={post.id}>
          <Post post={post} updatePost={updatePost}/>
        </li>
      ))}
    </ul>
  );
}
