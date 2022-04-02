import { useState } from 'react';
import { StopCircle, Box } from 'react-feather';
import Editor from '../_shared/editor';

const RequestPane: React.FC = () => {
  const [showTab1, setShowTab1] = useState(true);
  const [showTab2, setShowTab2] = useState(false);

  const switchTabs = () => {
    setShowTab1(!showTab1);
    setShowTab2(!showTab2);
  };

  return (
    <div className="h-full relative">
      <div className="flex w-full h-8 border-b border-blue-yonder/75 dark:border-white-default/25">
        <div className="flex grow h-full items-center p-2 space-x-2 overflow-x-scroll">
          <div className="text-secondary">
            <StopCircle size={18} strokeWidth={2} />
          </div>
          <div className="flex flex-nowrap whitespace-nowrap">
            <span className="text-black/75 dark:text-white-default/75 ">
              USDC Contract:
            </span>{' '}
            burnTokens()
          </div>
        </div>
        <div className="">
          <button className="bg-primary h-full pl-4 pr-3">Send</button>
        </div>
      </div>
      <div className="w-full h-8 flex ">
        <div className="flex flex-nowrap whitespace-nowrap overflow-scroll">
          <div
            className={`border-r   ${
              showTab1 ? '' : 'border-b'
            } border-blue-yonder/75 dark:border-white-default/25`}
          >
            <button
              className="h-full px-3"
              onClick={!showTab1 ? switchTabs : undefined}
            >
              JSON
            </button>
          </div>
          <div
            className={`border-r   ${
              showTab2 ? '' : 'border-b'
            } border-blue-yonder/75 dark:border-white-default/25`}
          >
            <button
              className="h-full px-3"
              onClick={!showTab2 ? switchTabs : undefined}
            >
              Form
            </button>
          </div>
        </div>

        <div className="flex grow justify-end items-center p-2 pr-1 border-b border-blue-yonder/75 dark:border-white-default/25 ">
          <span className="flex space-x-1 items-center cursor-pointer">
            <Box size={14} />
            <span className="bg-tetiary/40 px-2 rounded">Simulate</span>
          </span>
        </div>
      </div>
      <div className={`h-full ${showTab1 ? '' : 'hidden'}`}>
        <Editor />
      </div>
      <div className={`h-full ${showTab2 ? '' : 'hidden'}`}>form</div>
      <div className="absolute -right-[3px] top-0 w-[3px]">
        <div className="h-8 border-b border-blue-yonder/75 dark:border-white-default/25">
          <div className="bg-primary h-full"></div>
        </div>
        <div className="h-8 border-b border-blue-yonder/75 dark:border-white-default/25"></div>
      </div>
    </div>
  );
};

export default RequestPane;
