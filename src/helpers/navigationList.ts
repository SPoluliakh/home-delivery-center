interface nav {
  href: string;
  name: string;
  id: number;
}

export const navigationList: nav[] = [
  { name: 'Перевірити ТТН', href: '/departure-statusList', id: 1 },
  { name: 'Список відділень', href: '/departments-list', id: 2 },
];
