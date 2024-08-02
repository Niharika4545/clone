import { VStack, Box, Flex, Text, Button, Avatar } from "@chakra-ui/react";
import useNotificationStore from "../store/notificationStore";
import GradientText from "./FeedPosts/GradientText";
import { Link } from "react-router-dom";
import useAuthStore from "../store/authStore";

const NotificationsList = () => {
  const notifications = useNotificationStore((state) => state.notifications);
  const removeNotification = useNotificationStore((state) => state.removeNotification);
  const authUser = useAuthStore((state) => state.user);

  const handleRemoveNotification = (id) => {
    removeNotification(id);
  };

  return (
    <Box
      bg="black"
      boxShadow="md"
      borderRadius="md"
      p={4}
      maxW="lg"
      overflowY="auto"
    >
      <VStack spacing={2} align="stretch">
        <Box m={4}><GradientText fontSize={17} fontWeight={"bold"}>Your Notifications</GradientText></Box>
        
      
        {notifications.map((notification) => {

         
          
        if (authUser && notification.username == authUser.username) {
           
            
            return null ;
          }
          
    return (
    <Flex
      key={notification.id}
      align="center"
      gap={4}
      borderRadius="md"
      w="full"
    >
      
      <Link to={`/${notification.username}`}>
        <Avatar size="md" src={notification.profilePicture} />
      </Link>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        gap={4}
        w="full"
      >
        <Link to={`/${notification.username}`}>
          <Text fontWeight="bold" color="white">
            {notification.username}
          </Text>
        </Link>
        <GradientText fontSize="15" color="gray.400">
          {notification.message}
        </GradientText>
        <Flex gap={4}>
          {notification.message.startsWith("started following you") && (
            <Button
              size="sm"
              bg="blue"
              _hover={{ background: "white", color: "black" }}
              fontSize={10}
              fontWeight="medium"
              color="white"
              cursor="pointer"
              onClick={() => handleRemoveNotification(notification.id)}
            >
              Follow Back
            </Button>
          )}
          <Button
            size="sm"
            bg="blue"
            _hover={{ background: "white", color: "black" }}
            fontSize={10}
            fontWeight="medium"
            color="white"
            cursor="pointer"
            onClick={() => handleRemoveNotification(notification.id)}
          >
            Mark as Read
          </Button>

          
        </Flex>
      </Flex>
    </Flex>
  );


        })}
      </VStack>
    </Box>
  );
};

export default NotificationsList;
