import { RootState } from "@reduxjs/toolkit/dist/query/core/apiState";
import { useEthers } from "@usedapp/core";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSelector } from "react-redux";
import Button from "../UI/Button/Button";
import styles from "./BetaRegistration.module.css";

type Inputs = {
  name: string;
  email: string;
};

const BetaRegistration = () => {
  const { account } = useEthers();

  const { profile, isRegister } = useSelector((state: any) => state.profile);

  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="TEXT"
            {...register("name", { required: true })}
          />
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="TEXT"
            {...register("email", { required: true })}
          />
          <Button type="submit" disabled={account ? false : true}>
            GET EARLY ACCESS
          </Button>
        </form>
      </div>
      <div>
        {isRegister ? <h1>Registed!</h1> : <></>}
      </div>
    </section>
  );
};

export default BetaRegistration;
