import { useState, useEffect } from 'react';
import { useNavigate, useNavigation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Loader2 } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useLogin } from '@/hooks/api/auth';
import { paths } from '@/routes';
// import { LoginSocialButtons } from './SigninSocialButtons';

export function SigninForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const { mutate: login, isPending, error } = useLogin();

  // Check for remembered email on component mount
  useEffect(() => {
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
      setEmail(rememberedEmail);
      setRememberMe(true);
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    login(
      {
        variables: {
          email,
          password,
          rememberMe,
        },
      },
      {
        onSuccess: () => {
          navigate(paths.root.root);
        },
        onError: (error) => {
          console.error('Login error:', error.message);
        },
      }
    );
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="email">Email address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 "
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Checkbox
            id="remember-me"
            checked={rememberMe}
            onCheckedChange={() => setRememberMe(!rememberMe)}
          />
          <Label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
            Remember me
          </Label>
        </div>

        <div className="text-sm">
          <a href="/forgot-password" className="font-medium text-primary hover:underline">
            Forgot your password?
          </a>
        </div>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error.message}</AlertDescription>
        </Alert>
      )}

      <Button type="submit" className="w-full " disabled={isPending}>
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Signing in...
          </>
        ) : (
          ' Sign in'
        )}
      </Button>

      {/* <LoginSocialButtons /> */}

      <p className="mt-6 text-center text-sm text-gray-600">
        Dont have an account?{' '}
        <span
          className="font-medium inline-block text-primary hover:underline cursor-pointer"
          onClick={() => navigate('/auth/register')}
        >
          Sign up
        </span>
      </p>
    </form>
  );
}
