import people1 from '../assets/people1.jpg'
import people2 from '../assets/people2.jpg'
const Success = () => {
    return (
        <div className="py-10">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8">What Our Learners Say</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-sm">
                        <p className="text-gray-700 italic">
                            "This platform helped me speak French fluently in just 3 months. The gamified lessons were amazing!"
                        </p>
                        <div className="mt-4 flex items-center gap-4">
                            <img
                                className="w-12 h-12 rounded-full object-cover"
                                src={people1}
                                alt="User Avatar"
                            />
                            <div>
                                <h4 className="font-semibold">Jane Doe</h4>
                                <span className="text-gray-500 text-sm">Language Learner</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-sm">
                        <p className="text-gray-700 italic">
                            "The AI tutor made it so easy to practice speaking. Highly recommend this to anyone!"
                        </p>
                        <div className="mt-4 flex items-center gap-4">
                            <img
                                className="w-12 h-12 rounded-full object-cover"
                                src={people2}
                                alt="User Avatar"
                            />
                            <div>
                                <h4 className="font-semibold">John Smith</h4>
                                <span className="text-gray-500 text-sm">Advanced Learner</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Success;