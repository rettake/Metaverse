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
import Typography from "../UI/Typography/Typography";

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
        <Typography type="h2" color="#E75626" style={{ marginBottom: "18px" }}>
          Beta test registration
        </Typography>
        <Typography
          type="p"
          color="#fff"
          style={{ marginBottom: "36px", width: "420px" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
        {isRegister ? (
          <div className={styles.form}>
            <Typography type='h4' color='#fff' style={{marginBottom: "8px"}}>Name</Typography>
            <Typography
              type="h3"
              color="#E75626"
              style={{ marginBottom: "22px" }}
            >
              {profile?.username}
            </Typography>
            <Typography type='h4' color='#fff' style={{marginBottom: "8px"}}>Email</Typography>
            <Typography
              type="h3"
              color="#E75626"
              style={{ marginBottom: "22px" }}
            >
              {profile?.email}
            </Typography>
            <Button type="submit" disabled>
              List me to the table
            </Button>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <Typography type='h4' color='#fff' style={{marginBottom: "8px"}}>Name</Typography>
            <Input
              type="text"
              placeholder="We will display your name in participation list"
              {...register("name", { required: true })}
            />
            <Typography type='h4' color='#fff' style={{marginBottom: "8px"}}>Email</Typography>
            <Input
              type="email"
              placeholder="We will display your email in participation list"
              {...register("email", { required: true })}
            />
            <Button type="submit" disabled={!account}>
              GET EARLY ACCESS
            </Button>
          </form>
        )}
      </div>
      <div>
        {isRegister ? (
          <div>
            <Typography
              type="h2"
              color="#fff"
              style={{
                color: "white",
                marginBottom: "35px",
              }}
            >
              Participation listing (enable only for participants)
            </Typography>
            {isLoading ? (
              <Typography type="p" color="#fff" style={{ textAlign: "center", fontSize: "50px" }}>
                Loading...
              </Typography>
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
