import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react";
import useFollowUser from "../../hooks/useFollowUser";
import useAuthStore from "../../store/authStore";
import { Link } from "react-router-dom";
import GradientText from "../FeedPosts/GradientText";

const SuggestedUser = ({ user, setUser }) => {
	const { isFollowing, isUpdating, handleFollowUser } = useFollowUser(user.uid);
	const authUser = useAuthStore((state) => state.user);

	const onFollowUser = async () => {
		await handleFollowUser();
		setUser({
			...user,
			followers: isFollowing
				? user.followers.filter((follower) => follower.uid !== authUser.uid)
				: [...user.followers, authUser],
		});
	};

	return (
		<Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
			<Flex alignItems={"center"} gap={2}>
				<Link to={`/${user.username}`}>
					<Avatar src={user.profilePicURL} size={"md"} />
				</Link>
				<VStack spacing={2} alignItems={"flex-start"}>
					<Link to={`/${user.username}`}>
						<Box >
							<GradientText fontSize="sm" fontWeight="600">{user.username}</GradientText>
							
						</Box>
					</Link>
					<Box  >
						<GradientText fontSize={11}>{user.followers.length} followers</GradientText>
						
					</Box>
				</VStack>
			</Flex>
			{authUser.uid !== user.uid && (
				<Button
					fontSize={14}
					bg={"blue"}
					p={1}
					h={"max-content"}
					fontWeight={"medium"}
					color={"white"}
					cursor={"pointer"}
					_hover={{background:"white", color: "black" }}
					onClick={onFollowUser}
					isLoading={isUpdating}
				>
					{isFollowing ? "Unfollow" : "Follow"}
				</Button>
			)}
		</Flex>
	);
};

export default SuggestedUser;
