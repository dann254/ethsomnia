import { Circle, Disc, LifeBuoy, StopCircle } from 'react-feather';

const Sidebar: React.FC = () => {
  return (
    <div className=" w-52 pt-5">
      <div className="flex space-x-2 items-center py-1 hover:bg-white-off-white/25 px-3 cursor-default">
        <div className="text-primary">
          <Disc size={18} strokeWidth={2} />
        </div>
        <div>View</div>
      </div>
      <div className="flex space-x-2 items-center py-1 hover:bg-white-off-white/25 px-3">
        <div className="text-secondary">
          <StopCircle size={18} strokeWidth={2} />
        </div>
        <div>Non payabel</div>
      </div>
      <div className="flex space-x-2 items-center py-1 hover:bg-white-off-white/25 px-3">
        <div className="text-danger">
          <LifeBuoy size={18} strokeWidth={2} />
        </div>
        <div>Payable</div>
      </div>
      <div className="flex space-x-2 items-center py-1 hover:bg-white-off-white/25 px-3">
        <div className="text-tetiary">
          <Circle size={18} strokeWidth={2} />
        </div>
        <div>pure</div>
      </div>
    </div>
  );
};

export default Sidebar;
