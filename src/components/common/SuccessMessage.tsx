import { SuccessIcon } from "../../../public/icons";

interface SuccessMessageProps {
  message: string;
}

export default function SuccessMessage({ message }: SuccessMessageProps) {
  return (
    <div className="bg-green-50 border border-green-200 rounded-md p-2 sm:p-4">
      <div className="flex flex-col sm:flex-row">
        <div className="flex-shrink-0 flex justify-center sm:block">
          <SuccessIcon />
        </div>
        <div className="ml-0 sm:ml-3 mt-2 sm:mt-0">
          <h3 className="text-xs sm:text-sm font-medium text-green-800">Success</h3>
          <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-green-700">
            <p>{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
