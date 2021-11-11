type RandomNumberProps = {
  value: number;
  isPositive: boolean;
  isNegative?: boolean;
  isZero?: boolean;
};
function RandomNumbers({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) {
  return (
    <div>
      {value} {isPositive && "positive"} {isNegative && "negative"}{" "}
      {isZero && "zero"}
    </div>
  );
}

export default RandomNumbers;
