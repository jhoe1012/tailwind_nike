interface IShoeCard {
  imageURL: {
    thumbnail: string;
    bigShoe: string;
  };
  changeBigShoeImage: (imageURL: string) => void;
  bigShoeImg: string;
}

const ShoeCard = ({
  imageURL,
  changeBigShoeImage,
  bigShoeImg,
}: IShoeCard) => {
  const handleClick = () => {
    if (bigShoeImg !== imageURL.bigShoe) {
      changeBigShoeImage(imageURL.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imageURL.bigShoe ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h40 rounded-xl max-sm:p4">
        <img
          src={imageURL.thumbnail}
          alt="Shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
