

const Features = () => {
    return (
        <div className="bg-gray-100 py-12 mt-5">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center p-6 bg-white rounded-lg shadow-md">
                        <div className="text-indigo-500 mb-4">
                            <i className="fas fa-brain text-4xl"></i>
                        </div>
                        <h3 className="text-xl font-semibold">AI-Powered Tutor</h3>
                        <p className="text-gray-600 mt-2">Learn smarter with personalized AI feedback.</p>
                    </div>
                    <div className="text-center p-6 bg-white rounded-lg shadow-md">
                        <div className="text-green-500 mb-4">
                            <i className="fas fa-chart-line text-4xl"></i>
                        </div>
                        <h3 className="text-xl font-semibold">Track Your Progress</h3>
                        <p className="text-gray-600 mt-2">Monitor your learning journey with detailed analytics.</p>
                    </div>
                    <div className="text-center p-6 bg-white rounded-lg shadow-md">
                        <div className="text-yellow-500 mb-4">
                            <i className="fas fa-gamepad text-4xl"></i>
                        </div>
                        <h3 className="text-xl font-semibold">Gamified Learning</h3>
                        <p className="text-gray-600 mt-2">Enjoy fun, interactive games to build fluency.</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Features;