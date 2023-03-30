import useFetchUser from "./Hooks/useFetchUserDetails";
const Home_page = () => {
  const user_details = useFetchUser();
  return (
    <>
      <p>Home page</p>
      {user_details?.data.map((details) => (
        <p key={details.id}>{details.name}</p>
      ))}
    </>
  );
};
export default Home_page;
