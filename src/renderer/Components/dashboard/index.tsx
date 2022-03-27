import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col px-8 py-8">
      <div className="flex justify-between w-full mb-8">
        <span className="text-2xl">Dashboard</span>
        <div>
          <button className="px-4 py-1 bg-primary  rounded">Create</button>
        </div>
      </div>
      <div className="">
        <div className="border border-blue-yonder/75 dark:border-white-default/25 rounded w-52 p-2">
          <Link to="/workspace">collection</Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
