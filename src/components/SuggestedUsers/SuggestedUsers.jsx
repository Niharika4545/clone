import { Box, Flex, VStack } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";
import useGetSuggestedUsers from "../../hooks/useGetSuggestedUsers";
import GradientText from "../FeedPosts/GradientText";

const SuggestedUsers = () => {
	const { isLoading, suggestedUsers } = useGetSuggestedUsers();

	// optional: render loading skeleton
	if (isLoading) return null;

	return (
		<VStack py={8} px={6} gap={4}>
			<SuggestedHeader />

			{suggestedUsers.length !== 0 && (
				<Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
					<GradientText fontSize="12" fontWeight="bold"> Suggested for you</GradientText>
					{/* <Text fontSize={12} fontWeight={"bold"} _hover={{ color: "gray.400" }} cursor={"pointer"}>
						See All
					</Text> */}

					<GradientText fontSize={12} fontWeight={"bold"} hover={{color:"red"}} cursor={"pointer"} >See All</GradientText>
				</Flex>
			)}

			{suggestedUsers.map((user) => (
				<SuggestedUser user={user} key={user.id} />
			))}

			<Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
				<GradientText>© 2024 Developed By{" "}
				Niharika bejugam
				</GradientText>
				
				
			</Box>
		</VStack>
	);
};

export default SuggestedUsers;
