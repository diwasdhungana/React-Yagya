import { SigninForm } from '@/components/signInComponents/SigninForm';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md ">
        <img
          className="mx-auto h-12 w-auto"
          alt="Yagya.ai Logo"
          src="https://yagya.ai/favicon.png"
          width={48}
          height={48}
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-[#d9cde7] py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <SigninForm />
        </div>
      </div>

      <footer className="mt-8 text-center text-sm text-gray-500">
        <p>&copy; 2023 Yagya.ai. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="/about" className="hover:underline">
            About
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
          <a href="/help" className="hover:underline">
            Help
          </a>
        </div>
      </footer>
    </div>
  );
}
