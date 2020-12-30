import Router from "next/router";
import styles from "../styles/Home.module.css";

export default function Users(props) {
  // const router = useRouter();
  return (
    <div>
      <ul>
        {props.users.map((user) => (
          <li
            className={styles.user}
            key={user.id}
            onClick={() => Router.push(`/users/[id]`, `/users/${user.id}`)}
          >
            <div>
              <h5>
                {user.id}. {user.first_name} {user.last_name}
              </h5>
              <p>Email: {user.email}</p>
            </div>
            <img src={user.avatar} alt="" style={{ borderRadius: "50%" }} />
          </li>
        ))}
      </ul>
    </div>
  );
}
