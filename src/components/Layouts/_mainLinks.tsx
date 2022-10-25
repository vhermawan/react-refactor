import React from 'react';
import { IconLayoutDashboard, IconUsers, IconBuilding, IconChartInfographic, IconFileReport } from '@tabler/icons';
import { ThemeIcon, UnstyledButton, Group, Text } from '@mantine/core';
import { Link } from "react-router-dom";

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  path: string;
}

function MainLink({ icon, color, label, path }: MainLinkProps) {
  return (
    <UnstyledButton
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
      })}
    >
      <Link to={`/${path}`} style={{textDecoration:"none", color:"black"}}>
        <Group>
          <ThemeIcon color={color} variant="light">
            {icon}
          </ThemeIcon>
          
          <Text size="sm">{label}</Text>
        </Group>
      </Link>
    </UnstyledButton>
  );
}

const data = [
  { icon: <IconLayoutDashboard size={16} />, color: 'blue', label: 'Dashboard', path: 'dashboard' },
  { icon: <IconUsers size={16} />, color: 'teal', label: 'User', path: 'user' },
  { icon: <IconBuilding size={16} />, color: 'violet', label: 'Fasyankes', path: 'fasyankes' },
  { icon: <IconChartInfographic size={16} />, color: 'grape', label: 'Laporan Tahunan', path: 'laporan-tahunan' },
  { icon: <IconFileReport size={16} />, color: 'grape', label: 'Laporan Per Semester', path: 'laporan-per-semester' },
];

export function MainLinks() {
  const links = data.map((link) => <MainLink {...link} key={link.label} />);
  return <div>{links}</div>;
}