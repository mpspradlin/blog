import { title, navItems } from '../../data/consts';
import s from './style.module.css';

const DefaultLayout = ({ children }) => {
  return (
    <div className={s.root}>
      <nav className={s.nav}>
        <a href="/" className={s.navTitle}>
          <h1>{title}</h1>
        </a>
        <ul className={s.navLinks}>
          {
            navItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={s.navLink} href={item.slug}>{item.title}</a>
                </li>
              )
            })
          }
        </ul>
      </nav>
      {children}
    </div>
  )
}

export default DefaultLayout