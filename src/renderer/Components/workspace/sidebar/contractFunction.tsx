import { Circle, Disc, LifeBuoy, StopCircle } from 'react-feather';

interface IFunctionProps {
  name: string;
  stateMutability: string;
  isActive: boolean;
  isChild?: boolean;
  inputs?: any[];
  outputs?: any[];
}

const ContractFunction: React.FC<IFunctionProps> = (props) => {
  const {
    name,
    stateMutability,
    isActive,
    isChild = false,
    inputs = [],
    outputs = [],
  } = props;
  console.log({ stateMutability });
  return (
    <div>
      <div
        className={`flex space-x-2 items-center py-1 hover:bg-white-off-white/25 cursor-default ${
          isChild ? 'pr-3 pl-6' : 'px-3'
        } ${isActive ? 'border-l border-primary' : ''}`}
      >
        {stateMutability === 'view' && (
          <div className="text-primary">
            <Disc size={18} strokeWidth={2} />
          </div>
        )}
        {/* view */}
        {stateMutability === 'nonpayable' && (
          <div className="text-secondary">
            <StopCircle size={18} strokeWidth={2} />
          </div>
        )}
        {/* nonpayable*/}
        {stateMutability === 'payable' && (
          <div className="text-danger">
            <LifeBuoy size={18} strokeWidth={2} />
          </div>
        )}
        {/* payable */}
        {stateMutability === 'pure' && (
          <div className="text-tetiary">
            <Circle size={18} strokeWidth={2} />
          </div>
        )}
        {/* pure */}
        <div>{name}</div>
      </div>
    </div>
  );
};

export default ContractFunction;
