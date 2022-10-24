
import { TextInput, Button, Group, Box, PasswordInput, Center } from '@mantine/core';
import { useMachine } from '@xstate/react';
import { loginMachine } from '../../common/machines/loginMachines';

export default function Login() {
  const [_, dispatch] = useMachine(loginMachine);
  return (
    <>
      <Center sx={{ width: '700px', minHeight: '100vh', padding:'20px' }}  px="xl" mx="auto" my="auto">
        <Box>
          <form onSubmit={(e)=>{
            e.preventDefault();
            dispatch("CLICK_SUBMIT_BUTTON")
          }}>
            <TextInput
              withAsterisk
              label="Email"
              placeholder="your@email.com"
              type="email"
              onChange={(e)=> {
                dispatch({
                  type: "INPUT_EMAIL",
                  value: e.target.value,
                })
              }}
              required
            />

            <PasswordInput
              mt="md"
              placeholder="Password"
              label="Password"
              description="Password must include at least one letter, number and special character"
              aria-label="Your password"
              withAsterisk
              onChange={(e)=> {
                dispatch({
                  type: "INPUT_PASSWORD",
                  value: e.target.value,
                })
              }}
            />

            <Group position="right" mt="md">
              <Button type="submit">Submit</Button>
            </Group>
          </form>
        </Box>
      </Center>
    </>
  );
}