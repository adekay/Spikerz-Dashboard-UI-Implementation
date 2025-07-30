import { ServerAvailability } from "../types";

export const EC2: ServerAvailability = {
  id: 1,
  name: 'Loremipsumm',
  image: 'assets/images/ec2.png',
  imageAlt: 'ec2',
};

export const SERVER1: ServerAvailability = {
  id: 2,
  name: 'Loremipsu',
  image: 'assets/images/server.png',
  imageAlt: 'server',
};

export const SERVER2: ServerAvailability = {
  id: 3,
  name: 'Loremipsu',
  image: 'assets/images/server.png',
  imageAlt: 'server',
};

export const INSTANCE1: ServerAvailability = {
  id: 4,
  name: 'Loremipsumdolorsit',
  image: 'assets/images/server-down.png',
  imageAlt: 'server-down',
  ip: '192.168.1.1'
};

export const INSTANCE2: ServerAvailability = {
  id: 5,
  name: 'Loremipsumdolorsit',
  image: 'assets/images/server-down.png',
  imageAlt: 'server-down',
  ip: '192.168.1.2'
};
