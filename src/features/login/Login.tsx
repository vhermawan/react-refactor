import { TextInput, Checkbox, Button, Group, Box, PasswordInput, Center } from '@mantine/core';
import { useForm } from '@mantine/form';

export default function Login() {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <>
      <Center sx={{ width: '700px', minHeight: '100vh', padding:'20px' }}  px="xl" mx="auto" my="auto">
        <Box>
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
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

            <Checkbox
              mt="md"
              label="I agree to sell my privacy"
              {...form.getInputProps('termsOfService', { type: 'checkbox' })}
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