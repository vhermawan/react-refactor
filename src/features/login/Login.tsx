import { API } from '../../common/api/api';
import { TextInput, Button, Group, Box, PasswordInput, Center } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useMachine } from '@xstate/react';
import { loginMachine } from '../../common/machines/loginMachines';
import React from 'react';
interface IValues {
  email: string;
  password: string;
}

export default function Login() {

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  const [stateMachine, sendStateMachine] = useMachine(loginMachine, {
    actions:{
      submitForm: (ctx, event) => {
        
      }
    }
    // services: {
    //   postLogin: () => {
    //     return fetchCustomerInvitation(params);
    //   },
    // },
  });

  const submitForm = async (values: IValues) => {
    const userData = await API.post("/auth/login",values)
    console.log('values', userData)
    // sendStateMachine.send
  }

  return (
    <>
      <Center sx={{ width: '700px', minHeight: '100vh', padding:'20px' }}  px="xl" mx="auto" my="auto">
        <Box>
          <form onSubmit={form.onSubmit(submitForm)}>
            <TextInput
              withAsterisk
              label="Email"
              placeholder="your@email.com"
              {...form.getInputProps('email')}
            />

            <PasswordInput
              mt="md"
              placeholder="Password"
              label="Password"
              description="Password must include at least one letter, number and special character"
              aria-label="Your password"
              withAsterisk
              {...form.getInputProps('password')}
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