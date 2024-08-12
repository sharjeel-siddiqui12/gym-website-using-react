function TertiaryHeading({ color = "black", children }) {
  return (
    <h3
      className={`mb-5 text-4xl font-bold capitalize ${
        color === "white" ? "text-white" : ""
      }`}
    >
      {children}
    </h3>
  );
}

export default TertiaryHeading;
