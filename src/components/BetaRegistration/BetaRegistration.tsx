import { useEthers } from "@usedapp/core";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Button from "../UI/Button/Button";
import styles from "./BetaRegistration.module.css";
import { setIsRegister, setProfile } from "../../features/profile/profileSlice";
import { setParticipants } from "../../features/participants/participantsSlice";
import { RootState } from "../../app/store";
import { FunctionComponent } from "react";
import TableList from "../UI/TableList/TableList";
import Input from "../UI/Input/Input";

type Inputs = {
  name: string;
  email: string;
};

interface IProfile {
  username: string;
  email: string;
  address: string;
}

interface IProps {
  items: IProfile[];
  isLoading: boolean;
}

const BetaRegistration: FunctionComponent<IProps> = ({ items, isLoading }) => {
  const dispatch = useDispatch();

  const { profile, isRegister } = useSelector(
    (state: RootState) => state.profile
  );

  const { account } = useEthers();

  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(
      setProfile({
        username: data.name,
        email: data.email,
        address: account,
        id: Date.now(),
      })
    );
    dispatch(setIsRegister(true));

    dispatch(
      setParticipants([
        {
          username: data.name,
          email: data.email,
          address: account,
          id: Date.now(),
        } as IProfile,
        ...items,
      ])
    );
  };

  return (
    <section className={styles.section}>
      <div>
        <h2 className={styles.title}>Beta test registration</h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        {isRegister ? (
          <div className={styles.form}>
            <label htmlFor="">Name</label>
            <p className={styles.text__info}>{profile?.username}</p>
            <label htmlFor="">Email</label>
            <p className={styles.text__info}>{profile?.email}</p>
            <Button type="submit" disabled>
              List me to the table
            </Button>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="">Name</label>
            <Input
              type="text"
              placeholder="We will display your name in participation list"
              {...register("name", { required: true })}
            />
            <label htmlFor="">Email</label>
            <Input
              type="email"
              placeholder="We will display your email in participation list"
              {...register("email", { required: true })}
            />
            <Button type="submit" disabled={account ? false : true}>
              GET EARLY ACCESS
            </Button>
          </form>
        )}
      </div>
      <div>
        {isRegister ? (
          <div>
            <h2
              style={{
                color: "white",
                marginBottom: "35px",
              }}
              className={styles.title}
            >
              Participation listing (enable only for participants)
            </h2>
            {isLoading ? (
              <h1 style={{ color: "white", textAlign: "center" }}>
                Loading...
              </h1>
            ) : (
              <TableList />
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default BetaRegistration;
