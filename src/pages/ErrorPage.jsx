import { Link } from 'react-router-dom';
import error from '../assets/error.jpg'
const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-4'>
            <h1 className='text-4xl'>Oops!</h1>
            <img src={error} className='rounded-md my-6' alt="" />
            <Link to='/'>
                <button className='btn btn-outline'>Go Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;