import { Box, Flex, Tooltip } from "@chakra-ui/react";
import { NotificationsLogo } from "../../assets/constants";
import { useNavigate } from "react-router-dom";

const Notifications = () => {
  const navigate = useNavigate();

  const handleNotificationsClick = () => {
    navigate("/notifications");
  };

  return (
    <Box>
      <Tooltip
        hasArrow
        label={"Notifications"}
        placement="right"
        ml={1}
        openDelay={500}
        display={{ base: "block", md: "none" }}
      >
        <Flex
          alignItems={"center"}
          gap={4}
          _hover={{ bg: "red", color: "white" }}
          borderRadius={6}
          p={2}
          w={{ base: 10, md: "full" }}
          justifyContent={{ base: "center", md: "flex-start" }}
          onClick={handleNotificationsClick}
          cursor="pointer"
        >
          <NotificationsLogo />
          <Box display={{ base: "none", md: "block" }} color="#E1306C">
            Notifications
          </Box>
        </Flex>
      </Tooltip>
    </Box>
  );
};

export default Notifications;
