export type User = {
  _id: string;
  firstName: string;
  lastName: string;
  password: string;
  created_at: string;
  updated_at?: string;
  role: string;
  image?: string;
  subjects?: string[];
  classes?: string[];
  student_class?: string;
};
