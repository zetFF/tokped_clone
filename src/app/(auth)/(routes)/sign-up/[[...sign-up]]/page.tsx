import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div className="mt-8">
          <SignUp
            appearance={{
              elements: {
                formButtonPrimary: "bg-[#6c47ff] hover:bg-[#5a3fd8] text-white",
                card: "shadow-lg border-0",
                headerTitle: "text-gray-900",
                headerSubtitle: "text-gray-600",
                socialButtonsBlockButton: "border border-gray-300 hover:bg-gray-50",
                formFieldInput: "border border-gray-300 focus:border-[#6c47ff] focus:ring-[#6c47ff]",
                footerActionLink: "text-[#6c47ff] hover:text-[#5a3fd8]",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
