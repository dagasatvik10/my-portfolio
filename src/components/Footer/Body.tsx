import { ReactComponent as FbIcon } from 'assets/icons/facebook.svg';
import { ReactComponent as GithubIcon } from 'assets/icons/github.svg';
import { ReactComponent as LinkedinIcon } from 'assets/icons/linkedin.svg';
import { ReactComponent as TwitterIcon } from 'assets/icons/twitter.svg';
import React, { FunctionComponent } from 'react';

export const BodyComponent: FunctionComponent = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row self-center justify-evenly text-primary2 mt-12 mb-6">
        <a
          className="outline-none px-2"
          href="https://www.facebook.com/satvik.daga"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FbIcon className="fill-current w-8 md:w-12 hover:animate-buzzOut cursor-pointer" />
        </a>
        <a
          className="outline-none px-2"
          href="https://github.com/dagasatvik10"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon className="w-8 md:w-12 fill-current hover:animate-buzzOut cursor-pointer" />
        </a>
        <a
          className="outline-none px-2"
          href="https://in.linkedin.com/in/satvik-daga/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon className="w-8 md:w-12 fill-current hover:animate-buzzOut cursor-pointer" />
        </a>
        <a
          className="outline-none px-2"
          href="https://twitter.com/dagasatvik"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon className="w-8 md:w-12 fill-current hover:animate-buzzOut cursor-pointer" />
        </a>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col items-center w-1/3 justify-evenly md:text-3xl">
          <div className="hover:font-bold cursor-pointer">Home</div>
          <div className="hover:font-bold cursor-pointer">Portfolio</div>
          <div className="hover:font-bold cursor-pointer">Blog</div>
          <div className="hover:font-bold cursor-pointer">Contact Me</div>
        </div>
        <div className="w-1/3 flex flex-row justify-center items-center">
          <div className="w-1 h-20 md:h-32 bg-primary1"></div>
        </div>
        <div className="w-1/3 flex flex-row justify-center items-center md:text-2xl">
          <div>
            Visit my blog
            <br /> at{' '}
            <a
              className="bg-transparent text-primary2 outline-none"
              href="https://dev.to/dagasatvik10/"
              target="_blank"
              rel="noopener noreferrer"
            >
              dev.to
            </a>{' '}
            for
            <br />
            more details
            <br /> about what <br />I am working on.
          </div>
        </div>
      </div>
    </div>
  );
};
