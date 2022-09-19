type Artists = { artists: { name: string }[] };
type Programmers = { programmers: { name: string }[] };

declare const employees: Artists & Programmers;
employees.artists;
employees.programmers;
