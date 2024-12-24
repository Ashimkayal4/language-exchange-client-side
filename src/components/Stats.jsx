const Stats = () => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-12 my-10 px-4">
            <div className="flex flex-col items-center justify-center p-6 bg-blue-100 rounded-lg shadow-lg">
                <h1 className="font-bold text-4xl text-blue-600">3200 +</h1>
                <h1 className="font-semibold text-lg text-gray-700">All Tutors</h1>
            </div>

            <div className="flex flex-col items-center justify-center p-6 bg-yellow-100 rounded-lg shadow-lg">
                <h1 className="font-bold text-4xl text-yellow-600">2000 +</h1>
                <h1 className="font-semibold text-lg text-gray-700">5 Star Reviews</h1>
            </div>

            <div className="flex flex-col items-center justify-center p-6 bg-green-100 rounded-lg shadow-lg">
                <h1 className="font-bold text-4xl text-green-600">20 +</h1>
                <h1 className="font-semibold text-lg text-gray-700">Languages</h1>
            </div>
            
            <div className="flex flex-col items-center justify-center p-6 bg-purple-100 rounded-lg shadow-lg">
                <h1 className="font-bold text-4xl text-purple-600">5000 +</h1>
                <h1 className="font-semibold text-lg text-gray-700">Users</h1>
            </div>
        </div>
    );
};

export default Stats;
