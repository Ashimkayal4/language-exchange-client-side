import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
const ContactUs = () => {
    return (
        <div className=" flex flex-col items-center p-8">
            <div className="max-w-3xl w-full text-center">
                <h2 className="text-green-600 text-lg">How can we help you?</h2>
                <h1 className="text-4xl font-bold mt-2">Contact us</h1>
                <p className="text-gray-700 mt-4">
                    We're here to help and answer any questions you might have. We look
                    forward to hearing from you!
                </p>
            </div>
            <div className="mt-8 flex flex-col items-center space-y-4">
                <div className="flex items-center space-x-3 text-gray-800">
                    <FaMapMarkerAlt className="w-5 h-5" />
                    <span>Dhaka , Bangladesh</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-800">
                    <FaPhone className="w-5 h-5" />
                    <span>+8801990-835127</span>
                </div>
                <div className="flex items-center space-x-3 text-blue-600">
                    <FaEnvelope className="w-5 h-5" />
                    <a className="underline">
                        ashimkayal4@gmail.com
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;