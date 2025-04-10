import AuthForm from "@/components/AuthForm";

const Page = () => {
  // return <AuthForm type="sign-up" />;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <AuthForm type="sign-up" />

      {/* Footer */}
      <footer className="mt-6 text-sm text-gray-500 text-center">
       
        {/* &copy; {new Date().getFullYear()} PrepWise. Developed by Ayush Kumar. */}
        &copy; {new Date().getFullYear()} Ayush Kumar. All rights reserved.
    

      </footer>
    </div>
  );
};

export default Page;




