import { ErrorIcon } from "../../../public/icons";

interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="bg-red-50 border border-red-200 rounded-md p-2 sm:p-4">
      <div className="flex flex-col sm:flex-row">
        <div className="flex-shrink-0 flex justify-center sm:block">
          <ErrorIcon />
        </div>
        <div className="ml-0 sm:ml-3 mt-2 sm:mt-0">
          <h3 className="text-xs sm:text-sm font-medium text-red-800">Error</h3>
          <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-red-700">
            <p>{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
