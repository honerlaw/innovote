import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"

export function Avatar() {
  return (
    <>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  )
}
