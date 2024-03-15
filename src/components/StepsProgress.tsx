interface Props {
  currentStep: number;
}

const steps = [
  {
    id: 1,
    name: "Upload Audio",
  },
  {
    id: 2,
    name: "Formate Content",
  },
  {
    id: 3,
    name: "Sync Content with Audio",
  },
  {
    id: 4,
    name: "Preview",
  },
];
const StepsProgress = ({ currentStep }: Props) => {
  const progress = Math.round((currentStep / steps.length) * 100);
  return (
    <div>
      <h2 className="sr-only">Steps</h2>

      <div>
        <div className="overflow-hidden rounded-full bg-gray-200">
          <div
            className={`h-2 rounded-full bg-blue-500`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <ol className="mt-4 grid grid-cols-4 text-sm font-medium text-gray-500">
          {steps.map((step) => (
            <li
              key={step.id}
              className={`flex items-center  sm:gap-1.5 ${
                step.id === 1
                  ? " justify-start "
                  : step.id === steps.length
                  ? "justify-end"
                  : "justify-center"
              } ${step.id <= currentStep && " text-blue-600 "}`}
            >
              <span className="hidden sm:inline"> {step.name} </span>
            </li>
          ))}

          {/* <li className="flex items-center justify-center text-blue-600 sm:gap-1.5">
            <span className="hidden sm:inline"> Formate Content </span>
          </li>

          <li className="flex items-center justify-end sm:gap-1.5">
            <span className="hidden sm:inline"> Sync Content with Audio </span>
          </li>

          <li className="flex items-center justify-end sm:gap-1.5">
            <span className="hidden sm:inline"> Preview </span>
          </li> */}
        </ol>
      </div>
    </div>
  );
};

export default StepsProgress;
