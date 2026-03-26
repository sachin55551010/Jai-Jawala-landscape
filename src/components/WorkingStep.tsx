import { RxDividerVertical } from "react-icons/rx";
import { WorkingStepAnimation } from "./WorkingStepAnimation";
export const WorkingStep = () => {
  return (
    <section className="p-4 bg-(--primary-bg) overflow-hidden mt-8">
      <h1 className="font-bold text-white/80 uppercase text-4xl tracking-wider leading-13 mt-18 lg:text-5xl">
        Simple steps for our{" "}
        <span className="text-(--secondary-text-color)">landscape</span> work
      </h1>
      {/* steps */}
      <div className="flex flex-col mt-16 gap-10">
        {/* first */}
        <WorkingStepAnimation delay={0.2}>
          <div className="border-l-4 border-(--secondary-text-color) border-dotted pl-4">
            <div className="flex gap-1 items-center">
              <h6 className="font-bold text-white/80 text-2xl">01</h6>
              <RxDividerVertical
                className="text-white"
                size={30}
                strokeWidth={1}
              />
              <h6 className="text-white/80 font-bold text-2xl">
                Design Consultation
              </h6>
            </div>
            <p className="text-(--secondary-text-color) mt-4 leading-8 tracking-wider">
              In the initial step, we sit down with you to have a detailed
              discussion about your gardening vision and preferences.
            </p>
          </div>
        </WorkingStepAnimation>

        {/* second */}
        <WorkingStepAnimation delay={0.4}>
          <div className="border-l-4 border-(--secondary-text-color) border-dotted pl-4">
            <div className="flex gap-1 items-center">
              <h6 className="font-bold text-white/80 text-2xl">02</h6>
              <RxDividerVertical
                className="text-white"
                size={30}
                strokeWidth={1}
              />
              <h6 className="text-white/80 font-bold text-2xl">
                Design & Planning
              </h6>
            </div>
            <p className="text-(--secondary-text-color) mt-4 leading-8 tracking-wider">
              Our team of experts meticulously crafts a custom garden design
              that aligns with your desires and your space characteristics.
            </p>
          </div>
        </WorkingStepAnimation>

        {/* third */}
        <WorkingStepAnimation delay={0.6}>
          <div className="border-l-4 border-(--secondary-text-color) border-dotted pl-4">
            <div className="flex gap-1 items-center">
              <h6 className="font-bold text-white/80 text-2xl">03</h6>
              <RxDividerVertical
                className="text-white"
                size={30}
                strokeWidth={1}
              />
              <h6 className="text-white/80 font-bold text-2xl">
                Implement Construction
              </h6>
            </div>
            <p className="text-(--secondary-text-color) mt-4 leading-8 tracking-wider">
              We present the design to you for review. Once approved, we move
              forward to implement the plan with construction.
            </p>
          </div>
        </WorkingStepAnimation>

        {/* fourth */}
        <WorkingStepAnimation delay={0.8}>
          <div className="border-l-4 border-(--secondary-text-color) border-dotted pl-4">
            <div className="flex gap-1 items-center">
              <h6 className="font-bold text-white/80 text-2xl">04</h6>
              <RxDividerVertical
                className="text-white"
                size={30}
                strokeWidth={1}
              />
              <h6 className="text-white/80 font-bold text-2xl">
                Garden decorating
              </h6>
            </div>
            <p className="text-(--secondary-text-color) mt-4 leading-8 tracking-wider">
              With your design finalized, we put on our gardening gloves and
              work, creating your garden to be as beautiful as envisioned.
            </p>
          </div>
        </WorkingStepAnimation>
      </div>
    </section>
  );
};
