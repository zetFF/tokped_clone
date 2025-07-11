import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-2 sm:px-0">
      <div className="max-w-xs sm:max-w-md w-full space-y-6 sm:space-y-8">
        <div className="mt-4 sm:mt-8">
          <SignUp
            appearance={{
              elements: {
                formButtonPrimary: "bg-[#6c47ff] hover:bg-[#5a3fd8] text-white text-xs sm:text-base py-2 sm:py-3",
                card: "shadow-lg border-0",
                headerTitle: "text-gray-900 text-lg sm:text-2xl",
                headerSubtitle: "text-gray-600 text-xs sm:text-base",
                socialButtonsBlockButton: "border border-gray-300 hover:bg-gray-50 text-xs sm:text-base py-2 sm:py-3",
                formFieldInput: "border border-gray-300 focus:border-[#6c47ff] focus:ring-[#6c47ff] text-xs sm:text-base py-2 sm:py-3",
                footerActionLink: "text-[#6c47ff] hover:text-[#5a3fd8] text-xs sm:text-base",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
