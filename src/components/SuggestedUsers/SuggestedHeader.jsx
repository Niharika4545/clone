import { Avatar, Button, Flex} from "@chakra-ui/react";
import useLogout from "../../hooks/useLogout";
import useAuthStore from "../../store/authStore";
import { Link } from "react-router-dom";
import GradientText from "../FeedPosts/GradientText";

const SuggestedHeader = () => {
	const { handleLogout, isLoggingOut } = useLogout();
	const authUser = useAuthStore((state) => state.user);

	if (!authUser) return null;

	return (
		<Flex justifyContent={"space-between"} gap={2} alignItems={"center"} w={"full"}>
			<Flex alignItems={"center"} gap={2}>
				<Link to={`${authUser.username}`}>
					<Avatar size={"lg"} src={authUser.profilePicURL} />
				</Link>
				<Link to={`${authUser.username}`}>
					<GradientText fontSize={15} fontWeight={"bold"}>{authUser.username}</GradientText>
				</Link>
			</Flex>
			<Button
				size={"xs"}
				
				bg={"blue"}
				_hover={{ background: "white", color:"black" }}
				fontSize={14}
				fontWeight={"medium"}
				color={"white"}
				onClick={handleLogout}
				isLoading={isLoggingOut}
				cursor={"pointer"}
				
				py={4}
				px={6}
				
			>
				Log out
			</Button>
		</Flex>
	);
};

export default SuggestedHeader;
