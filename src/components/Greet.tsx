/*video 1*/
type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};
export const Greet = (props: GreetProps) => {
  return (
    <div>
      {props.isLoggedIn ? (
        <h2>
          Welcome {props.name} You have {props.messageCount}
        </h2>
      ) : (
        "Welcome Guest"
      )}
    </div>
  );
};

export default Greet;
