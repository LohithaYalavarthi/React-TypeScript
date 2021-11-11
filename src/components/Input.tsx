type InputProps = {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};
function Input({ handleInputChange, value }: InputProps) {
  const handleInputChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  return <input type="text" onChange={handleInputChange} value={value} />;
}

export default Input;
