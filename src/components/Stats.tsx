import { TriggerOnScroll } from "./NumberTrigger";

export default function Stats() {
  return (
    <section className="py-10">
      <h2 className="text-2xl ml-3 text-primary font-semibold underline underline-offset-4">
        MED stats
      </h2>
      <div className="flex gap-20 flex-wrap justify-center">
        <div className="text-2xl font-semibold text-center  gap-1 text-primary">
          <span className="text-link">
            +
            <TriggerOnScroll className="text-2xl text-red-500">
              {1000}
            </TriggerOnScroll>
          </span>
          <p> Transports per month</p>
        </div>
        <div className="text-2xl font-semibold text-center  gap-1 text-primary">
          <span className="text-link">
            <TriggerOnScroll className="text-2xl text-red-500">
              {95}
            </TriggerOnScroll>
            %
          </span>
          <p>Client satisfaction</p>
        </div>
        <div className="text-2xl font-semibold text-center  gap-1 text-primary">
          <span className="text-link">
            <TriggerOnScroll className="text-2xl text-red-500">
              {10}
            </TriggerOnScroll>{" "}
            minutes
          </span>
          <p>Average response time</p>
        </div>
      </div>
    </section>
  );
}
