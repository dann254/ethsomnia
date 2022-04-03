import Editor from '../_shared/editor';
import { ExternalLink, ChevronDown, Copy } from 'react-feather';
import { useState } from 'react';
import { DefaultDropdown } from '../../shared/dropDowns';

let dropdownButton = (
  <div className="flex flex-nowrap items-center space-x-1 px-2 cursor-pointer whitespace-nowrap">
    <span>3 minutes ago</span>
    <ChevronDown size={14} />
  </div>
);

const ResponsePane: React.FC = () => {
  const [showTab1, setShowTab1] = useState(true);
  const [showTab2, setShowTab2] = useState(false);
  const [showTab3, setShowTab3] = useState(false);
  const [showTab4, setShowTab4] = useState(false);

  const switchTabs = (tabId) => {
    setShowTab1(false);
    setShowTab2(false);
    setShowTab3(false);
    setShowTab4(false);

    switch (tabId) {
      case 1:
        setShowTab1(true);
        break;
      case 2:
        setShowTab2(true);
        break;
      case 3:
        setShowTab3(true);
        break;
      case 4:
        setShowTab4(true);
        break;
      default:
        setShowTab1(true);
        setShowTab2(false);
        setShowTab4(false);
    }
  };

  const options = [
    [
      {
        name: 'Success: just now',
      },
      {
        name: 'Error: yesterday',
      },
    ],
  ];

  return (
    <div className="h-full">
      <div className="flex justify-between items-center w-full h-8 border-b border-blue-yonder/75 dark:border-white-default/25">
        <div className="flex flex-nowrap whitespace-nowrap space-x-3 items-center pl-5 overflow-x-scroll">
          <span className="bg-danger/75 px-2 py-0.5">Error</span>
          <div className="bg-black/25 dark:bg-white-default/25 px-2 py-0.5">
            0.31 ms
          </div>
          <span>
            <Copy size={16} />
          </span>
        </div>
        <DefaultDropdown toggleButton={dropdownButton} options={options} />
      </div>
      <div className="w-full h-8 flex ">
        <div className="flex flex-nowrap overflow-x-scroll">
          <div
            className={`border-r ${
              showTab1 ? '' : 'border-b'
            } border-blue-yonder/75 dark:border-white-default/25`}
          >
            <button
              className="h-full px-3"
              onClick={
                !showTab1
                  ? () => {
                      switchTabs(1);
                    }
                  : undefined
              }
            >
              Preview
            </button>
          </div>
          <div
            className={`border-r ${
              showTab2 ? '' : 'border-b'
            } border-blue-yonder/75 dark:border-white-default/25`}
          >
            <button
              className="h-full px-3"
              onClick={
                !showTab2
                  ? () => {
                      switchTabs(2);
                    }
                  : undefined
              }
            >
              Events
            </button>
          </div>
          <div
            className={`border-r ${
              showTab3 ? '' : 'border-b'
            } border-blue-yonder/75 dark:border-white-default/25`}
          >
            <button
              className="h-full px-3"
              onClick={
                !showTab3
                  ? () => {
                      switchTabs(3);
                    }
                  : undefined
              }
            >
              Raw
            </button>
          </div>
          <div
            className={`border-r ${
              showTab4 ? '' : 'border-b'
            } border-blue-yonder/75 dark:border-white-default/25`}
          >
            <button
              className="h-full px-3"
              onClick={
                !showTab4
                  ? () => {
                      switchTabs(4);
                    }
                  : undefined
              }
            >
              Timeline
            </button>
          </div>
        </div>

        <div className="flex grow justify-end items-center p-2 border-b border-blue-yonder/75 dark:border-white-default/25 whitespace-nowrap">
          <span className="flex space-x-1 items-center cursor-pointer">
            <ExternalLink size={14} />
            <span className="bg-secondary/10 px-2 rounded">
              View on block explorer
            </span>
          </span>
        </div>
      </div>
      <div className={`h-full ${showTab1 ? '' : 'hidden'}`}>
        <Editor isReadOnly={true} />
      </div>
      <div className={`h-full ${showTab2 ? '' : 'hidden'}`}>Timeline</div>
      <div className={`h-full ${showTab3 ? '' : 'hidden'}`}>Raw</div>
      <div className={`h-full ${showTab4 ? '' : 'hidden'}`}>Timeline</div>
    </div>
  );
};

export default ResponsePane;
