import { useNavigate } from "react-router-dom";

export default function Profile() {
    const profile = {
        name: "John Doe",
        email: "john@example.com",
        bio: "Web developer and tech enthusiast"
    };

const navigate = useNavigate();

function goToUserDetails() {
    // Navigate to the UserDetails page with a specific user ID
    navigate("/profile/1");
}   


    return (
        <div>
            <h1>Profile</h1>
            <p><strong>Name:</strong> {profile.name}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Bio:</strong> {profile.bio}</p>
            <button onClick={goToUserDetails}>Go to User 1 Details</button>
        </div>
    );
}