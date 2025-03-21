import { useForm } from "react-hook-form";

type SignUpFormType = {
  email: string;
  password: string;
  passwordConfirmation: string;
};

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<SignUpFormType>({ mode: "onBlur" });

  const password = watch("password");

  const submitForm = (data: SignUpFormType) => {
    console.log(data);
  };
  return (
    <form
      className="app-l-flex-col app-l-flex-col__align-center app-h-mt-6"
      onSubmit={handleSubmit(submitForm)}
    >
      <div className="app-form-group">
        <input
          type="email"
          placeholder="Email or Mobile"
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
      <div className="app-form-group">
        <input
          type="password"
          placeholder="Confirm Password"
          className={`app-form-control ${errors.passwordConfirmation ? "app-form-control--error" : ""}`}
          {...register("passwordConfirmation", {
            required: "Password confirmation is required",
            validate: (value) => value === password || "Passwords do not match",
          })}
        />
        {errors.passwordConfirmation && (
          <p className="app-form-error">{errors.passwordConfirmation.message as string}</p>
        )}
      </div>
      <div className="app-h-mt-6">
        <div className="app-checkbox">
          <input type="checkbox" id="useSocial" />
          <label htmlFor="useSocial">Use social networks</label>
        </div>
      </div>
      <button
        disabled={!isValid}
        type="submit"
        className="app-btn app-btn--regular app-h-w100 app-h-mt-6"
      >
        <span className="app-btn__text">Registration</span>
      </button>
    </form>
  );
}
