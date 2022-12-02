import React from 'react'
import Head from 'next/head'
import styled from "styled-components"

import Link from 'next/link'
import LoginButton from '../../components/LoginButton/LoginButton'
import { Navbar } from '../../components/Navbar/Navbar'
import Button from '../../components/Button'
import { useSession, signIn, signOut } from 'next-auth/react'
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]"
import { useRouter } from 'next/router';
import { Magic } from 'magic-sdk';
import { useForm } from 'react-hook-form';
import { useState } from 'react';


const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: calc(100vh - 60px - 58px);
  min-height: calc(100vh - 60px - 58px);
  width: 100vw;
  max-width: 100vw;
  margin: 0;
  padding: 1.5em;
  background-color: #F2F2F2;
  overflow-y: scroll;

  @media (min-width: 768px) {
    min-height: 100vh;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #1F1F1F;
  }
`
const Logo = styled.img`
  width: 86px;
  height: 86px;
  margin: 0 0 2.5em 0;
`
const LoginText = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 16px;
  margin: 0 0 1.5em 0;
`

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 8.5em 0 0 0;
  padding: 0;
  
  a {
    color: #FE672F;
    text-decoration: none;
    margin: 0 0 0 0.5em;
  }
  `

const FormDiv = styled.div`
    max-width: 100%;
    margin: 1em 0;
    padding: 1em;
    background-color: white;
    border-radius: 1em;
    font-family: "Open Sans", sans-serif;
  
    @media (prefers-color-scheme: dark) {
      background-color: #2F2F2F;
    }
  `

const Input = styled.input`
  width: 100%;
  min-height: 3em;
  border: 1px solid #707070;
  border-radius: 0.5em;
  padding: 0.5em 1em;
  font-family: "Open Sans", sans-serif;
`
const magic = typeof window !== 'undefined' && new Magic(process.env.NEXT_PUBLIC_MAGIC_PK || 'a')

export default function LogIn({
  ...props
}) {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [formOpen, setFormOpen] = useState(false);

  const onSubmit = async ({ email }) => {
    if (!magic) throw new Error(`magic not defined`);

    const didToken = await magic.auth.loginWithMagicLink({ email });

    await signIn('credentials', {
      didToken,
      callbackUrl: router.query['callbackUrl'].toString(),
    });
  };

  return (
    <>
      <Head>
        <title>Sign In | First Maps</title>
        <meta name="description" content="First Maps: Login" />
        <link rel="icon" href="/location-dot-solid.svg" />
      </Head>

      <StyledContainer>
        <Logo
          src="/logo.png"
        />
        <LoginText>
          Sign In
        </LoginText>
        <LoginButton
          text="Continue with Email"
          Logo="Email.png"
          color={"#FE672F"}
          onClick={() => {
            setFormOpen(true);
          }}
        />
        <LoginButton
          text="Continue with Google"
          Logo="Google.png"
          color={"#4285F4"}
          onClick={() => {
            signIn('google')
          }}
        />
        <LoginButton
          text="Continue with Facebook"
          Logo="Facebook.png"
          color={"#3B5998"}
          onClick={() => {
            signIn('facebook')
          }}
        />
        {formOpen && (
          <form>
            <FormDiv onSubmit={handleSubmit(onSubmit)}>
              <Input {...register('email', { required: true })} placeholder="example@example.com" />
              <Button type="submit" text="Sign in" ></Button>
            </FormDiv>
          </form>
        )}
      </StyledContainer>

      <Navbar
        navPages={['Home', 'Explore', 'Contribute', 'Profile']}
        activePage={'Profile'}
      />
    </>
  )
}

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context.req, context.res, authOptions)

  if (session) {
    return {
      redirect: {
        destination: '/profile',
        permanent: false,
      },
    }
  }

  return {
    props: { session }
  }
}