import React, { createContext, useReducer, useContext, useEffect, useState } from "react";

// 🔹 Initial State
const initialState = {
  user: null,
  role: null,
  token: null,
};

// 🔹 Create Context
export const AuthContext = createContext(initialState);

// 🔹 Reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        user: action.payload.user,
        role: action.payload.role,
        token: action.payload.token,
      };
    case "LOGOUT":
      return { user: null, role: null, token: null };
    default:
      return state;
  }
};

// 🔹 Provider
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const [loading, setLoading] = useState(true); // ✅ prevent redirect before data loads

  // Load saved data on startup
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedRole = localStorage.getItem("role");
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          user: storedUser ? JSON.parse(storedUser) : null,
          role: storedRole || null,
          token: storedToken,
        },
      });
    }
    setLoading(false);
  }, []);

  // Sync localStorage
  useEffect(() => {
    if (state.token) {
      localStorage.setItem("user", JSON.stringify(state.user));
      localStorage.setItem("role", state.role);
      localStorage.setItem("token", state.token);
    } else {
      localStorage.removeItem("user");
      localStorage.removeItem("role");
      localStorage.removeItem("token");
    }
  }, [state.user, state.role, state.token]);

  if (loading) return null; // ⏳ wait until auth data loads

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook
export const useAuth = () => useContext(AuthContext);
