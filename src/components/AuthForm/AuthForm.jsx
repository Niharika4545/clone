import { Box, Flex,Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import GoogleAuth from "./GoogleAuth";
import { InstagramLogo } from "../../assets/constants";

const AuthForm = () => {
	const [isLoggedin, setIsLogged] = useState(true);

	return (
		<>
			<Box border={"1px solid gray"} borderRadius={4} padding={5}>
				<VStack spacing={4}>
				<InstagramLogo />

					{isLoggedin ? <Login /> : <Signup />}

					
					<Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
						<Box flex={2} h={"1px"} bg={"gray.400"} />
						<Text mx={1} color={"blue"}>
							OR
						</Text>
						<Box flex={2} h={"1px"} bg={"white"} />
					</Flex>
					{/* Google auth */}

					<GoogleAuth prefix={isLoggedin ? "Log in" : "Sign up"} />
				</VStack>
			</Box>
               {/* don't have account and already have an account. */}
			<Box border={"1px solid gray"} borderRadius={4} padding={5}>
				<Flex alignItems={"center"} justifyContent={"center"}>
					<Box mx={2} fontSize={14}>
						{isLoggedin ? "Don't have an account?" : "Already have an account?"}
					</Box>
					<Box onClick={() => setIsLogged(!isLoggedin)} color={"orange.500"} cursor={"pointer"}>
						{isLoggedin ? "Sign up" : "Log in"}
					</Box>
				</Flex>
			</Box>
		</>
	);
};

export default AuthForm;
