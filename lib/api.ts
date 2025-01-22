const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://hms.abhijeetadarsh.online";
// const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

export const loginUser = async (credentials: { username: string; password: string }) => {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  // console.log(JSON.stringify(credentials));
  // console.log(response);

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Login failed");
  }

  const data = await response.json();
  console.log(data);
  // localStorage.setItem("token", data.token);
};
