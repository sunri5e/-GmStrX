import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setUserData } from "@/store/features/authSlice";

type LoginFormType = {
  email: string;
  password: string;
};

export default function LoginForm({ onSubmit }: { onSubmit: () => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormType>({ mode: "onBlur" });
  const dispatch = useDispatch();

  const submitForm = (data: LoginFormType) => {
    // dispatch(setUserData({}));
    onSubmit();
  };

  return (
    <form
      className="app-l-flex-col app-l-flex-col__align-center app-h-mt-6"
      onSubmit={handleSubmit(submitForm)}
    >
      <div className="app-form-group">
        <input
          type="email"
          placeholder="Email"
          className={`app-form-control ${errors.email ? "app-form-control--error" : ""}`}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && <p className="app-form-error">{errors.email.message as string}</p>}
      </div>
      <div className="app-form-group">
        <input
          type="password"
          placeholder="Password"
          className={`app-form-control ${errors.password ? "app-form-control--error" : ""}`}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
        />
        {errors.password && <p className="app-form-error">{errors.password.message as string}</p>}
      </div>
      <button
        disabled={!isValid}
        type="submit"
        className="app-btn app-btn--regular app-h-w100 app-h-mt-6"
      >
        <span className="app-btn__text">Login</span>
      </button>
    </form>
  );
}
