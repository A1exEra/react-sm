// import styles from "./Users.module.css";
import Card from "../UI/Card";
import User from "../User/User";
const Users = (props) => {
  console.log(props.users);
  return (
    <Card>
      {props.users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </Card>
  );
};
export default Users;
