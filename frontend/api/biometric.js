import instance from ".";

const loginBiometric = async () => {
  const response = await instance.get("/login");
  console.log(response);
  return response.data;
};

const signupBiometric = async () => {
  const response = await instance.get("/signup");
  return response.data;
};

export { loginBiometric, signupBiometric };
