import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <>
      <div className="w-full flex justify-center items-center min-h-screen">
        <SignIn />
      </div>
    </>
  );
}
