interface Admin {
  readonly id: number;
  name: string;
  email?: string;
}

declare const admin: Admin;
admin.id = 1;
admin.email;

type Filelds = "name" | "age";

type AdminFileds = `${Filelds}_admin`;
