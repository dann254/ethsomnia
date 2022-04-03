import ContractSection from './contractSection';

const Sidebar: React.FC = () => {
  return (
    <div className=" w-52 pt-3">
      <div className="px-4 text-center">
        <div className="bg-tetiary/25 py-1 rounded-full">Rinkeby</div>
      </div>
      <ContractSection />
    </div>
  );
};

export default Sidebar;
