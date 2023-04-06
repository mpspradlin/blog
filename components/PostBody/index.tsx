import s from './style.module.css';

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <div
      className={s.markdown}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

export default PostBody
