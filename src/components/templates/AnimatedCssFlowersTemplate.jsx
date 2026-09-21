import AnimatedCssFlowersExperience from '../experiences/AnimatedCssFlowersExperience';

export default function AnimatedCssFlowersTemplate({ to_name, from_name, message }) {
  return (
    <div className="w-full h-[calc(100vh)] bg-[#020b05] relative overflow-hidden flex flex-col items-center justify-end">
      <AnimatedCssFlowersExperience message={message} sender={from_name} to_name={to_name} />
    </div>
  );
}
