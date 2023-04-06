import PostList from '../PostList'
import s from './style.module.css'

const HomeView = ({ posts }) => {
  const about = 'Aliquam sem et tortor consequat id porta nibh. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Diam vulputate ut pharetra sit amet. Ut tellus elementum sagittis vitae et leo. Arcu non odio euismod lacinia at quis risus sed vulputate. Aliquam sem et tortor consequat id porta nibh. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Diam vulputate ut pharetra sit amet. Ut tellus elementum sagittis vitae et leo.'
  return (
    <div className={s.root}>
      <div className={s.intro}>
        <p className={s.introText}>{about}</p>
      </div>
      <PostList posts={posts} />
    </div>
  )
}

export default HomeView;