import { star } from "../assets/icons";
function PopularProductCard({ imgURL, name, price }) {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
    </div>
  );
}

export default PopularProductCard;
