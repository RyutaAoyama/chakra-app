import { memo, useCallback, VFC } from "react";
import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { MenuIconButton } from "../../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../../molecules/MenuDrawer";

export const Header: VFC = memo(() => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const history = useHistory();

    const onClickHome = useCallback(() => history.push('/home'), [history]);
    const onClickUserManagement = useCallback(() => history.push('/home/use_management'), [history]);
    const onClickSetting = useCallback(() => history.push('/home/setting'), [history]);

    return (
        <>
            <Flex
                as="nav"
                color="gray.50"
                bg="teal"
                align="center"
                justify="space-between"
                padding={{ base: "md", md: "5" }}
            >
                <Flex as="a" align="center" mr={8} _hover={{ cursor: "pointer" }}>
                    <Heading
                        as="h1"
                        fontSize={{ base: "md", md: "lg" }}
                        onClick={onClickHome}
                    >
                        ユーザー管理アプリ
                    </Heading>
                </Flex>
                <Flex
                    align="center"
                    fontSize="sm"
                    flexGrow={2}
                    display={{ base: "none", md: "flex" }}
                >
                    <Box pr={4}>
                        <Link onClick={onClickUserManagement}>ユーザー一覧</Link>
                    </Box>
                    <Link onClick={onClickSetting}>設定</Link>
                </Flex>
                <MenuIconButton onOpen={onOpen}></MenuIconButton>
            </Flex>
            <MenuDrawer onClose={onClose} isOpen={isOpen} onClickHome={onClickHome}
                onClickUserManagement={onClickUserManagement}
                onClickSetting={onClickSetting} />
        </>
    )
});