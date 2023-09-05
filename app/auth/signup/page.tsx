'use server';

import { SignupForm } from '@/components/Auth/Signup';
import { signUp } from './signup';

export default async function Signup() {
  return (
    <main>
      <SignupForm signUp={signUp} />
    </main>
  );
}
