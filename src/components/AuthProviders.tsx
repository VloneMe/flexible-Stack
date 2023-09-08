'use client';

import {getProviders, signIn } from 'next-auth/react'
import { useState, useEffect } from "react";

type Provider = {
  id: string;
  name: string;
  type: string;
  signinurl: string;
  callbackurl: string;
  signinurlParams?: Record<string, string> | null;
}

type Providers = Record<string, Provider>;

export const AuthProviders = () => {

  const [providers, setProviders] = useState<Providers | null>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      console.log(res);

      setProviders(res);
    }

    fetchProviders();
  }, []);
  
  if(providers){
    return (
      <div>
        {Object.values(providers).map((provider: Provider, index) => (
          <button key={index} onClick={() => signIn(provider?.id)}>
            {provider.id}
          </button>
        ))}
      </div>
    )
  }
}
