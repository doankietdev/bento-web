'use client';

import React from 'react';
import { Typography } from '@/components/typography';
import styled from '@/styles/auth.module.css';
import Image from 'next/image';
import { Button } from '@/components/button';
import { useRouter } from 'next/navigation';

export default function ServerErrorView() {
  const router = useRouter()

  return (
    <>
      <div className="bg-auth w-full h-svh flex justify-center items-center">
        <div id="stars" className={styled.stars}></div>
        <div className="w-full p-[2.5rem] relative flex justify-center gap-[48px]">
          <div className='flex flex-col justify-center items-center'>
            <h1 className="text-[100px] font-bold text-primary leading-none mb-2">500</h1>
            <Typography level="h5" className="text-primary mb-6">Opps! Server Error</Typography>
            <Button
              type="button"
              className="w-full base p-2 bg-blue-800 hover:bg-blue-700"
              child={
                <Typography level="basem" className="text-white font-bold">
                  Back To Home Page
                </Typography>
              }
              onClick={() => router.push('/')}
            />
          </div>
          <Image
            src={'/img/server-error.png'}
            width={200}
            height={200}
            alt="Server Error"
          />
        </div>
      </div>
    </>
  );
}
