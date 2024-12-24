import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"


const Features = () => {
    const {isDarkMode}=useContext(AuthContext)
    return (
        <div className={`py-12 mt-5 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-base-100 text-black'}`} >
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl text-black font-semibold">AI-Powered Tutor</h3>
                        <p className="text-gray-600 mt-2">Learn smarter with personalized AI feedback.</p>
                    </div>
                    <div className="text-center p-6 bg-white rounded-lg shadow-md">
                       
                        <h3 className="text-xl text-black font-semibold">Track Your Progress</h3>
                        <p className="text-gray-600 mt-2">Monitor your learning journey with detailed analytics.</p>
                    </div>
                    <div className="text-center p-6 bg-white rounded-lg shadow-md">
                        
                        <h3 className="text-xl text-black font-semibold">Gamified Learning</h3>
                        <p className="text-gray-600 mt-2">Enjoy fun, interactive games to build fluency.</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Features;