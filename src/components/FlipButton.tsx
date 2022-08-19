export function FlipButton({ changeImage }: any) {
  return (
    <button
      className="button"
      onClick={() => {
        changeImage();
      }}
    >
      Toss Coin
    </button>
  );
}
