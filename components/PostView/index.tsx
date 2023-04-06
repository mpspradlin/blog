import DateFormatter from '../DateFormatter';
import PostBody from '../PostBody';
import s from './style.module.css'

const PostView = ({ post }) => {
  return (
    <div className={s.root}>
      <header className={s.header}>
        <h2 className={s.title}>{post.title}</h2>
        <DateFormatter dateString={post.date} />
      </header>
      <PostBody content={post.content} />
    </div>
  )
}

export default PostView;