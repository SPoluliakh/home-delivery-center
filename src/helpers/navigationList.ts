interface nav {
  href: string;
  name: string;
  id: number;
}

export const navigationList: nav[] = [
  { name: 'Check TTN', href: '/departure-statusList', id: 1 },
  { name: 'Department`s list', href: '/departments-list', id: 2 },
];
