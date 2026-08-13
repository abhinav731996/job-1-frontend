import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import api from "../api";

const SignUp = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  // const onSubmit = (data) => {
  //   const user = {
  //     firstName: data.firstName,
  //     lastName: data.lastName,
  //     email: data.email,
  //     age: data.age,
  //     password: data.password,
  //   };

  //   localStorage.setItem(
  //     "registeredUser",
  //     JSON.stringify(user)
  //   );

  //   alert("Signup Successful ");
  //   navigate("/signin");
  // };

  const onSubmit = async (data) => {
    const user = {
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      age: Number(data.age),
      password: data.password,
    };

    try {
      const response = await api.post("/users/signup", user);

      alert(response.data.message);

      navigate("/signin");
    } catch (error) {
      alert(error.response.data.detail);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2 className="auth-title">Create Account</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* First Name */}
          <div className="mb-3">
            <input
              type="text"
              placeholder="First Name"
              className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
              {...register("firstName", {
                required: "First Name is required",
                minLength: {
                  value: 3,
                  message: "Minimum 3 characters required",
                },
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Only alphabets allowed",
                },
              })}
            />
            <div className="invalid-feedback">{errors.firstName?.message}</div>
          </div>

          {/* Last Name */}
          <div className="mb-3">
            <input
              type="text"
              placeholder="Last Name"
              className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
              {...register("lastName", {
                required: "Last Name is required",
              })}
            />
            <div className="invalid-feedback">{errors.lastName?.message}</div>
          </div>

          {/* Email */}
          <div className="mb-3">
            <input
              type="email"
              placeholder="Email Address"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter valid email",
                },
              })}
            />
            <div className="invalid-feedback">{errors.email?.message}</div>
          </div>

          {/* age */}
          <div className="mb-3">
            <input
              type="number"
              placeholder="age"
              className={`form-control ${errors.age ? "is-invalid" : ""}`}
              {...register("age", {
                required: "Age is required",

                min: {
                  value: 18,
                  message: "Minimum age is 18",
                },

                max: {
                  value: 100,
                  message: "Invalid age",
                },
              })}
            />
            <div className="invalid-feedback">{errors.age?.message}</div>
          </div>

          {/* phone
          <div className="mb-3">
            <input
              type="num"
              placeholder="age Number"
              className={`form-control ${
                errors.age ? "is-invalid" : ""
              }`}
              {...register("phone", {
                required: "phone Number is required",
                pattern: {
                  value: /^[6-9]\d{9}$/,
                  message:
                    "Enter valid 10 digit mobile number",
                },
              })}
            />
            <div className="invalid-feedback">
              {errors.phone?.message}
            </div>
          </div> */}

          {/* Password */}
          <div className="mb-3">
            <input
              type="password"
              placeholder="Password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
                  message:
                    "8+ chars, uppercase, lowercase, number & special character",
                },
              })}
            />
            <div className="invalid-feedback">{errors.password?.message}</div>
          </div>

          {/* Confirm Password */}
          <div className="mb-3">
            <input
              type="password"
              placeholder="Confirm Password"
              className={`form-control ${
                errors.confirmPassword ? "is-invalid" : ""
              }`}
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
            <div className="invalid-feedback">
              {errors.confirmPassword?.message}
            </div>
          </div>

          {/* Terms */}
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="terms"
              {...register("terms", {
                required: "Please accept Terms & Conditions",
              })}
            />

            <label className="form-check-label" htmlFor="terms">
              I agree to Terms & Conditions
            </label>

            {errors.terms && (
              <div className="text-danger small">{errors.terms.message}</div>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-100 auth-btn">
            Create Account
          </button>
        </form>

        <p className="text-center mt-4">
          Already have an account?
          <Link to="/signin" className="ms-1 text-decoration-none">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
