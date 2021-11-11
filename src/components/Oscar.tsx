type OscarProps = {
  // for passing children
  children: React.ReactNode;
};
function Oscar(props: OscarProps) {
  return <div>{props.children}</div>;
}

export default Oscar;
