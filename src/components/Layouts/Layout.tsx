import {
  AppShell,
  Navbar,
  Header,
  ScrollArea,
  Box,
} from '@mantine/core';
import { MainLinks } from './_mainLinks';
import { User } from './_user';
import { Brand } from './_brand';
import { Navigate } from 'react-router-dom';

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({children}) => {

  // const token = localStorage.getItem("token")
  // if (!token) {
  //   return <Navigate to="/" replace />;
  // }

  return (
    <AppShell
      padding="md"
      navbar={
      <Navbar width={{ base: 300 }} height={580} p="xs">
        <Navbar.Section mt="xs">
        </Navbar.Section>
        <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
          <Box>
            <MainLinks />
          </Box>
        </Navbar.Section>
        <Navbar.Section>
          <User />
        </Navbar.Section>
      </Navbar>
      }
      header={
        <Header height={60} p="xs">
          <Brand />
        </Header>
      }
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
  >
    {children}
  </AppShell>
  );
}

export default Layout;