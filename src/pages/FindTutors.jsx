import { useLoaderData } from "react-router-dom";
import FindTutorCard from "../components/FindTutorCard";

const FindTutors = () => {
    const tutorials = useLoaderData()
    return (
        <div className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
            {
                tutorials.map(tutorial => <FindTutorCard
                    key={tutorial._id}
                    tutorial={tutorial}
                ></FindTutorCard>)
            }
        </div>
    );
};

export default FindTutors;