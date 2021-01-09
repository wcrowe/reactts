import * as React from "react";
import {
  Button,
  Flex,
  Heading,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";



// Note: This code could be better,
// so I'd recommend you to understand how
// I solved and you could write yours better:)
interface Props {
  text: string;
  bgcolor?: string;
  menuItem?: React.ReactChild;
}

const MyHeader = ({ text, bgcolor, menuItem }) => {
  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        bg={bgcolor}
      >
        <Menu closeOnSelect={false}>
          <MenuButton as={Button} colorScheme="blue">
          </MenuButton>
          <MenuList minWidth="240px">
            <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
    
            </MenuOptionGroup>
            <MenuDivider />
            <MenuOptionGroup title="Country" type="checkbox">
              <MenuItemOption value="email">Email</MenuItemOption>
              <MenuItemOption value="phone">Phone</MenuItemOption>
              <MenuItemOption value="country">Country</MenuItemOption>
              {menuItem}
            </MenuOptionGroup>
          </MenuList>
        </Menu>
        <Link to="/">
          <Flex align="center" mr={5}>
            <Heading as="h1" size="lg" letterSpacing={".1rem"}>
              🍕 {text}
            </Heading>
          </Flex>
        </Link>
      </Flex>
    </>
  );
};

export default MyHeader;
