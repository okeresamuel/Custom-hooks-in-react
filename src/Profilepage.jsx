import useFetchUser from "./Hooks/useFetchUserDetails";
const Profile_page = () => {
  const user_details = useFetchUser();
  return (
    <>
      <p>Profile page</p>
      {user_details?.data.map((details) => (
        <p key={details.id}>{details.name}</p>
      ))}
    </>
  );
};
export default Profile_page;
