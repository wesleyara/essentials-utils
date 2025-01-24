export const smartLog = <TValue = unknown>(
  value: TValue,
  currentFunction: Function,
  label?: string,
) => {
  return console.log(
    `%c[${currentFunction.name}] -`,
    "color: red",
    label ? `${label}:` : "DEBUG:",
    value,
  );
};
