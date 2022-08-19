export function CoinImage({ image }: any) {
  return (
    <div className="coin">
      <img className="image" src={image.src} />
    </div>
  );
}
