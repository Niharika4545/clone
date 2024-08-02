import { useEffect, useState } from "react";
import useNotificationStore from "../store/notificationStore";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useGetUserNotifications = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { notifications, setNotifications } = useNotificationStore();
  const showToast = useShowToast();
  const authUser = useAuthStore((state) => state.user);

  useEffect(() => {
    const getNotifications = async () => {
      if (!authUser) return;
      setIsLoading(true);
      setNotifications([]);

      try {
        const q = query(collection(firestore, "users"), where("uid", "==", authUser.uid));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const userDoc = querySnapshot.docs[0];
          const userNotifications = userDoc.data().notifications || [];
          setNotifications(userNotifications);
        } else {
          showToast("Error", "User not found", "error");
        }
      } catch (error) {
        showToast("Error", error.message, "error");
        setNotifications([]);
      } finally {
        setIsLoading(false);
      }
    };

    getNotifications();
  }, [setNotifications, authUser, showToast]);

  return { isLoading, notifications };
};

export default useGetUserNotifications;
