import './style.css';

import { useRouteError, Link } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id='notfound'>
      <div className='notfound'>
        <div className='notfound-404'>
          <h1 className='display-4 text-center'>
            4<span></span>4
          </h1>
        </div>
        <h2>Oops! Page Not Be Found</h2>
        <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>

        <Link className='btn btn-primary shadow lift me-2' to='/' relative='path'>
          Back to homepage
        </Link>
      </div>
    </div>
  );
}
