import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../Redux/slices/userSlice";

const useAuthListener = () => {
  const dispatch = useDispatch();
  const auth = getAuth();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await dispatch(setUser(user));
      }
    });

    return () => {
      unsubscribe();
    };
  }, [auth, dispatch]);
};

export default useAuthListener;
