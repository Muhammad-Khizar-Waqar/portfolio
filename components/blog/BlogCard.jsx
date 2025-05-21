import { Link } from "react-router-dom";

export default function BlogCard({ item }) {
  return (
    <>
      <Link to={`/blog/${item.id}`}>
        <img
          src={`/assets/images/blog/${item.img}`}
          alt='img'
          className='img-fluid'
        />
      </Link>
      <Link to={`/blog/${item.id}`} rel='bookmark'>
        {item.title}
      </Link>
      <br />
    </>
  );
}
