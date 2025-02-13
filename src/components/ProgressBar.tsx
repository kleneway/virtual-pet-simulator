interface ProgressBarProps {
  value: number;
  className?: string;
}

export const ProgressBar = ({ value, className = "" }: ProgressBarProps) => {
  return (
    <div
      className={`h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700 ${className}`}
    >
      <div
        className="h-full rounded-full bg-blue-500 transition-all duration-300 ease-in-out dark:bg-blue-400"
        style={{ width: `${Math.min(Math.max(value, 0), 100)}%` }}
      />
    </div>
  );
};
