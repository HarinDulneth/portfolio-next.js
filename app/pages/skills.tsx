import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

export default function Skills() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-black">
      <div className="relative justify-items-center lg:mt-35">
        <h2 className="font-orbitron text-5xl font-semibold">Skills</h2>
      </div>
      <div className="relative z-10 mt-10 sm:mt-16 md:mt-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">
        <div className="max-w-7xl">
          <InfiniteMovingCards
            items={[
              { name: "React" },
              { name: "Next.js" },
              { name: "Python" },
              { name: "TypeScript" },
              { name: "JavaScript" },
              { name: "Node.js" },
            ]}
            className="my-10 sm:my-16 md:my-20"
          />
        </div>
      </div>
    </div>
  );
}
