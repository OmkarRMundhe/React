import { useParams } from "react-router-dom";
import NotfoundError from "./NotfoundError";

function UserDetails() {

  // Using useParams hook to extract the 'id' parameter from the URL
  const { id } = useParams();

   if (!/^\d+$/.test(id)) {
    return <NotfoundError />;  // OR Navigate("/404")
  }

  return (
    <div>
      <h2>User Details Page</h2>
      <p>Displaying details for user with ID: {id}</p>
    </div>
  );
}
export default UserDetails;
