type InputProps = React.ComponentProps<"input">;
function CustomInput(props: InputProps) {
  return (
    <div>
      <input {...props} />
    </div>
  );
}

export default CustomInput;
