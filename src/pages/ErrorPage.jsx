import { Link } from 'react-router-dom';
import error from '../assets/error.jpg';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen bg-gray-100 p-6'>
            <h1 className='text-6xl font-bold text-red-600'>Oops!</h1>
            <p className='text-lg text-gray-700 mt-2'>Something went wrong. The page you are looking for does not exist.</p>
            <img src={error} className='rounded-md my-6 shadow-lg w-96' alt="Error Illustration" />
            <Link to='/'>
                <button className='px-6 py-3 bg-red-600 text-white text-lg rounded-lg shadow-md hover:bg-red-700 transition-all duration-300'>
                    Go Home
                </button>
            </Link>
        </div>
    );
};

export default ErrorPage;
