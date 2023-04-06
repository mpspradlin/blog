import DateFormatter from '../DateFormatter'
import s from './style.module.css'

const PostList = ({ posts }) => {
  return (
    <div>
      <ul className={s.list}>
        {posts.map((post, index) => {
          return (
            <li key={index}>
              <a className={s.link} href={`/posts/${post.slug}`}>
                <span className={s.title}>{post.title}</span>
                <DateFormatter dateString={post.date} />
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default PostList;