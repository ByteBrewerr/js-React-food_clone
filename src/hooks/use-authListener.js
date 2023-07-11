import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser, removeUser } from "../Redux/slices/userSlice";

const useAuthListener = () => {
  const dispatch = useDispatch();
  const auth = getAuth();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
};

export default useAuthListener;
