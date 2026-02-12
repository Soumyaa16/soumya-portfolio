'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, House as HomeIcon } from 'revoicons';
import { User } from 'lucide-react';
import { useState } from 'react';
import ContactFormModal from './ContactFormModal';

export default function Nav() {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 h-[10vh] flex flex-row justify-between px-6 md:px-12 items-center z-10 font-[family-name:var(--font-geist-sans)]">

        <div className="flex items-center">
          <Link href="/" className="group">
            <div className="p-3 rounded-full bg-black/5 hover:bg-black/10 transition-colors duration-200">
              <HomeIcon className="w-5 h-5 text-gray-800" />
            </div>
          </Link>
          <button
            onClick={() => setIsModalOpen(true)}
            className="ml-3 group"
            aria-label="Open contact form"
          >
            <div className="p-3 rounded-full bg-transparent hover:bg-black/5 transition-colors duration-200">
              <User className="w-5 h-5 text-gray-800" />
            </div>
          </button>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="https://www.linkedin.com/in/soumyadubeyy/"
            target="_blank"
            className="flex items-center text-gray-800 hover:text-black transition-colors text-base font-medium group"
          >
            <span className='mr-1'>LinkedIn</span>
            <ArrowUpRight className="w-4 h-4 mt-[2px] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>

          <Link
            href="https://drive.google.com/file/d/1t5wgP3Rjf-Rs31XgjcPO-BDZH3M_ii4B/view?usp=sharing"
            target="_blank"
            className="flex items-center text-gray-800 hover:text-black transition-colors text-base font-medium group"
          >
            <span className='mr-1'>Resume</span>
            <ArrowUpRight className="w-4 h-4 mt-[2px] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </nav>

      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
