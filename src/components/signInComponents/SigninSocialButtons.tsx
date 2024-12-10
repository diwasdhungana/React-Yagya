'use client';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail, Facebook } from 'lucide-react';
import Image from 'next/image';
import { Notification } from '../notification';
import { useNavigation } from 'react-router-dom';
import { useSignin } from '@/hooks/api/auth';
import { useSession } from 'next-auth/react';
import { getTokensfromSession } from '@/lib/actions/user.action';
const Icons = {
  linkedin: Linkedin,
  facebook: Facebook,
  google: Mail,
};

export function LoginSocialButtons() {
  const { data: session } = useSession();
  const navigate = useNavigate();
  const { handleGoogleSignIn } = useSignin();
  // const handleSocialLogin = async (platform: string) => {
  //   switch (platform) {
  //     case "LinkedIn":
  //       console.log("LinkedIn login");
  //       break;
  //     case "Google":
  //       {
  //         try {
  //           handleGoogleSignIn();
  //           Notification.success("Success!", "Google login successful");
  //           navigate("/chat");
  //         } catch (error) {
  //           Notification.error("Error!", "Google login failed");
  //         }
  //       }
  //       break;
  //     case "Facebook":
  //       console.log("Facebook login");
  //       break;
  //     default:
  //       console.log("Unknown platform");
  //   }
  // };

  return (
    <div className="mt-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or continue with</span>
        </div>
      </div>
      <div className="mt-6 ">
        {/* <Button variant="outline" onClick={() => handleSocialLogin("LinkedIn")}>
          <Linkedin className="h-5 w-5" />
          <span className="sr-only">Sign in with LinkedIn</span>
        </Button> */}
        <Button
          variant="outline"
          className="w-full"
          onClick={() => {
            handleGoogleSignIn();
            Notification.success('Success!', 'Google login successful');
            navigate('/chat');
          }}
        >
          <Image src="/assets/gmail.png" width="24" height="24" alt="Gmail" />
          <span className="ml-1">Sign in with Google</span>
        </Button>
        {session && (
          <Button
            variant="outline"
            className="w-full"
            onClick={async () => {
              try {
                await getTokensfromSession(session);
              } catch (error) {
                console.log('error', error);
              } finally {
                navigate('/chat');
              }
            }}
          >
            <Image src="/assets/gmail.png" width="24" height="24" alt="Gmail" />
            <span className="ml-1">Click here to finish Sign In.</span>
          </Button>
        )}
        {/* <Button variant="outline" onClick={() => handleSocialLogin("Facebook")}>
          <Facebook className="h-5 w-5" />
          <span className="sr-only">Sign in with Facebook</span>
        </Button> */}
      </div>
    </div>
  );
}
