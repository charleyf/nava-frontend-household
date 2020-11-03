import MemberCard from "./MemberCard";

function Household({ members }) {
  return (
    <>
      {members.map((member) => {
        return <MemberCard member={member} />;
      })}
    </>
  );
}

export default Household;
