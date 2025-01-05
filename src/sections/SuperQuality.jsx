import Button from "../constants/Button";
import { shoe8 } from "../assets/images";

function SuperQuality() {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 text-4xl font-palanquin capitalize lg:max-w-lg font-bold">
          We Provide You
          <span className="text-coral-red"> super</span>
          <br />
          <span className="text-coral-red"> Quality </span>
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, Our meticuously crafted footwear
          is designed to elevate your experience, providing your with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="view details" />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="sheo8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
}

export default SuperQuality;
