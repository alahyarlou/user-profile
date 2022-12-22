import { useState } from "react";
// css
import "./profile.scss";
// data
import { profileData } from "./../../profile-data";

const Profile = () => {
  const [userProfile, setUserProfile] = useState(profileData);

  const removeUserProfile = (id) => {
    setUserProfile(userProfile.filter((profile) => profile.id !== id));
  };
  const clearAllUserProfile = () => {
    setUserProfile([]);
  };
  return (
    <section className="profile-section --flex-center --100vh --bg-primary">
      <div className="container">
        <h2 className="--text-light">User Profile App</h2>
        {userProfile.length ? (
          userProfile.map((profile) => (
            <div className="profile --card --flex-between --p" key={profile.id}>
              <img src={profile.img} alt={profile.name} />
              <div className="desc">
                <h4 className="--text-light">Name: {profile.name}</h4>
                <p className="--text-light">Job: {profile.job}</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="icon"
                onClick={() => removeUserProfile(profile.id)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </div>
          ))
        ) : (
          <p className="--text-light --p">user profile not found!</p>
        )}

        <button
          type="button"
          className="--btn --btn-danger"
          onClick={clearAllUserProfile}
        >
          Clear All
        </button>
      </div>
    </section>
  );
};

export default Profile;
