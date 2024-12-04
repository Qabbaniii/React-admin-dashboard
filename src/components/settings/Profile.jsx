import { User } from "lucide-react";
import SettingSection from "./SettingSection";

const Profile = () => {
  return (
    <SettingSection icon={User} title={"Profile"}>
      <div className="flex flex-col sm:flex-row items-center mb-6">
        <img
          src="https://media.licdn.com/dms/image/v2/D4D03AQFUQS4qA7uN-Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1726441381361?e=1738800000&v=beta&t=KmEvUiXkZQelCFOHDDFL-FZQaoyvK4kBj370XF9qPaQ"
          alt="Profile"
          className="rounded-full w-20 h-20 object-cover mr-4"
        />

        <div>
          <h3 className="text-lg font-semibold text-gray-100">
            Abdullah Qabbani
          </h3>
          <p className="text-gray-400">Abdullahqabbaniii@gmail.com</p>
        </div>
      </div>

      <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto">
        Edit Profile
      </button>
    </SettingSection>
  );
};
export default Profile;
