import instance from "./index";

// Function to call the /login endpoint
const loginBiometric = async () => {
  try {
    const response = await instance.get("/login");
    console.log("Login response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error during login:", error.message);
    throw error; // Re-throw to handle it in the calling function
  }
};

// Function to call the /signup endpoint
const signupBiometric = async () => {
  try {
    const response = await instance.post("/signup");
    console.log("Signup response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error during signup:", error.message);
    throw error; // Re-throw to handle it in the calling function
  }
};

export { loginBiometric, signupBiometric };
