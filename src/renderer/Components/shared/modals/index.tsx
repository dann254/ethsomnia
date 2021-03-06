/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X } from 'react-feather';

interface ModalProps {
  open: boolean;
  children: JSX.Element;
  title: string;
  closeModal?: () => void;
}

export const DefaultModal: React.FC<ModalProps> = (props) => {
  const { open, closeModal, children, title } = props;

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="flex items-start justify-center h-screen pt-4 px-4 pb-20 text-center i">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-[#FFFFFF]/40 dark:bg-[#2f363d]/40 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          {/* <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span> */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative flex flex-col align-top rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all mt-14 mb-8 mx-10 bg-[#FFFFFF] dark:bg-[#2f363d] w-[95%] h-full ring-1 ring-black dark:ring-white-default/25 ring-opacity-5">
              <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 "
                  onClick={() => closeModal()}
                >
                  <span className="sr-only">Close</span>
                  <X />
                </button>
              </div>
              <div className="h-full items-start">
                <div className="h-full mt-2 text-center sm:mt-0 sm:text-left w-full  ">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 font-medium border-b  border-blue-yonder/75 dark:border-white-default/25 pb-3 h-8"
                  >
                    {title}
                  </Dialog.Title>
                  <div className="pt-2 h-[calc(100%-2rem)] overflow-hidden">
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
