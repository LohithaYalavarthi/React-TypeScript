export type Name = {
  first: string;
  last: string;
};
export type PersonProps = {
  name: Name;
};
// This is defined in seperate file because if there is lot more files and if we need type that is similiar
// that is similiar to the above one then its best to define commonly
