import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../features/signup";
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const [user, setUser] = useState({});
  const [ data, setData ] = useState();
  const dispatch = useDispatch();
  const { signupState, loading, error } = useSelector((state) => ({ ...state.signup }));
  const navigate = useNavigate();

  //navigates user to loginpage
  const handleNavigateLogin = () =>{
    navigate("/login")
  }

  //handles inputs from signup form 
  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser({ ...user, [name]: value.toLowerCase() });
    console.log(user);
  };

  //submit userdata to database
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createPost(user));
    // setData(signupState);
    // console.log(signupState);
    // console.log(data);
    // console.log(loading);
  };

  //fetches user data stored in redux state
  useEffect(()=>{
    console.log(signupState);
    console.log(error);
  },[signupState])

  // console.log(signupState);
  // console.log(loading);
  // console.log(error);
  
  return (
    <div>
      {/* <Navbar /> */}
      <div className="bg-indigo-50 font-jost mt-[40px]">
        <div className="xl:px-20 md:px-10 sm:px-6 px-4 md:py-12 py-9 2xl:mx-auto 2xl:container md:flex items-center justify-center">
          <div className=" md:hidden sm:mb-8 mb-6"></div>
          <div className="bg-white shadow-lg rounded  md:w-[100%] md:max-w-[800px] lg:w-[100%] lg:max-w-[1000px] flex flex-col lg:flex-row">
            <div className="md:max-w-[800px] md:w-[100%] lg:w-[500px]">
              <img
                // src={process.env.PUBLIC_URL + "/small_house.jpg"}
                alt=""
                className="lg:w-[100%] lg:h-[100%] object-cover"
              />
            </div>
            <div className="lg:w-[500px] flex flex-col items-center lg:px-10 sm:px-6 sm:py-10 xxs:py-4">
              <p
                tabIndex={0}
                className="flex justify-around xxs:text-2xl xxs:w-[250px] xxs:p-1 focus:outline-none md: text-3xl lg:text-4xl leading-6 text-gray-800  lg:p-5 lg:w-[400px]"
              >
                Create a new account
              </p>
              <h3
                tabIndex={0}
                className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500 flex"
              >
                Already have account?
                <p
                    onClick={handleNavigateLogin}
                  className="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none text-gray-800 cursor-pointer ml-2"
                >
                  Login here
                </p>
              </h3>
              <form
                onSubmit={handleSubmit}
                className="xxs:w-[250px] xsm:w-[400px] sm:w-[500px] md:w-[600px] lg:w-[300px] mt-5"
              >
                <div>
                  <label
                    htmlFor="firstname"
                    className="text-sm font-medium leading-none text-gray-800 "
                  >
                    {" "}
                    First Name{" "}
                  </label>
                  <input
                    id="firstname"
                    aria-labelledby="firstname"
                    name="first_name"
                    type="text"
                    className="bg-gray-100 border rounded text-xs font-medium leading-none placeholder-gray-400 text-gray-800 py-3 w-full pl-3 mt-2"
                    placeholder="e.g: John"
                    onChange={handleInput}
                  />
                </div>
                <div className="mt-3 w-full">
                  <label
                    htmlFor="lastname"
                    className="text-sm font-medium leading-none text-gray-800 "
                  >
                    {" "}
                    Last Name{" "}
                  </label>
                  <input
                    id="lastname"
                    aria-labelledby="lastname"
                    name="last_name"
                    type="text"
                    className="bg-gray-100 border rounded text-xs font-medium leading-none placeholder-gray-400 text-gray-800 py-3 w-full pl-3 mt-2"
                    placeholder="e.g: Doe "
                    onChange={handleInput}
                  />
                </div>
                <div className="mt-3 w-full">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none text-gray-800 "
                  >
                    {" "}
                    Email{" "}
                  </label>
                  <input
                    id="email"
                    aria-labelledby="email"
                    name="email"
                    type="email"
                    className="bg-gray-100 border rounded text-xs font-medium leading-none placeholder-gray-400 text-gray-800 py-3 w-full pl-3 mt-2"
                    placeholder="e.g: john@gmail.com "
                    onChange={handleInput}
                  />
                </div>
                <div className="mt-3 w-full">
                  <label
                    htmlFor="myInput"
                    className="text-sm font-medium leading-none text-gray-800 "
                  >
                    {" "}
                    Phone Number{" "}
                  </label>
                  <div className="relative flex items-center justify-center">
                    <input
                      id="number"
                      name="phone_number"
                      type="number"
                      placeholder="e.g: 0785238923"
                      className="bg-gray-100 border rounded text-xs font-medium leading-none placeholder-gray-400 text-gray-800 py-3 w-full pl-3 mt-2"
                      onChange={handleInput}
                    />
                  </div>
                </div>
                <div className="mt-3 w-full">
                  <label
                    htmlFor="myInput"
                    className="text-sm font-medium leading-none text-gray-800 "
                  >
                    {" "}
                    Password{" "}
                  </label>
                  <div className="relative flex items-center justify-center">
                    <input
                      id="myInput"
                      name="password"
                      // type={showpass ? "text" : "password"}
                      type="password"
                      className="bg-gray-100 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                      onChange={handleInput}
                    />
                  </div>
                </div>
                <div className="mt-3 w-full">
                  <label
                    htmlFor="myInput"
                    className="text-sm font-medium leading-none text-gray-800 "
                  >
                    {" "}
                    Password Confirmation{" "}
                  </label>
                  <div className="relative flex items-center justify-center">
                    <input
                      id="password_confirmation"
                      name="password_confirmation"
                      // type={showpass ? "text" : "password"}
                      type="password"
                      className="bg-gray-100 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                      onChange={handleInput}
                    />
                  </div>
                </div>
                <div
                  className="mt-3"
                  //   style={login ? { display: "none" } : { display: "block" }}
                >
                  <label
                    htmlFor="myInput"
                    className="text-sm font-medium leading-none text-red-700 "
                  >
                    Please Sign Up if you don't have an account
                  </label>
                </div>
                <div
                  className="mt-8"
                  //   style={login ? { display: "block" } : { display: "none" }}
                >
                  <label
                    htmlFor="myInput"
                    className="text-sm font-medium leading-none text-red-700 p-2"
                    // style={showError?{display:"block"}:{display:"none"}}
                  >
                    your login information may be too short or wrong
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    type="submit"
                    className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-blue-500 border rounded hover:bg-blue-600 py-4 w-full"
                    value="Create Account"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;