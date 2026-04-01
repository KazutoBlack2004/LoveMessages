import ProposalExperience from '../experiences/ProposalExperience';

export default function ProposalTemplate({ to_name, message }) {
  // Use message as the title if present, otherwise default
  const title = message || `¿${to_name}, quieres ser mi novia?`;

  return (
    <div className="min-h-screen bg-linear-to-br from-primary-50 to-primary-100 dark:from-primary-950 dark:to-primary-900 flex flex-col items-center justify-center p-4 sm:p-8 transition-colors duration-500 overflow-hidden">
      <div className="w-full max-w-4xl mx-auto">
        <ProposalExperience title={title} />
      </div>
    </div>
  );
}
