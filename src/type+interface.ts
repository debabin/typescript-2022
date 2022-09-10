type Id = number;
type FullName = {
  firstName: string;
  lastName: string;
  middleName?: string;
};

interface User {
  id: Id;
  fullName: FullName;
}

const gitHubUser: User = {
  id: 1,
  fullName: {
    firstName: "John",
    lastName: "Makros",
  },
};
