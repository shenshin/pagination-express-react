import { Link } from 'react-router-dom';
import style from './Pagination.module.css';

const Pagination = ({ page, totalPages }) => (
  <p>
    {'Pages: '}
    {[...Array(totalPages).keys()].map((x) => (
      <span
        key={x}
        className={Number(page) === x + 1 ? style.active : style.inactive}
      >
        <Link to={`/page/${x + 1}`}>{x + 1}</Link>
        {' '}
      </span>
    ))}
  </p>
);

export default Pagination;
