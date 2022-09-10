type Artists = { artists: { name: string }[] };
type Programmers = { jobs: { name: string }[] };

declare const employees: Artists & Programmers;
employees.artists;
employees.jobs;
