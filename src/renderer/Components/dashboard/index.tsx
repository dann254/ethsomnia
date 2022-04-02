import Cards from './cards';

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col pb-2 pt-10 text-sm h-screen overflow-hidden">
      <div className="overflow-scroll">
        <div className="flex justify-between w-full mb-8 mt-8 px-8 ">
          <span className="text-2xl">Dashboard</span>
          <div>
            <button className="px-4 py-1 bg-primary  rounded">Create</button>
          </div>
        </div>
        <div className="flex grow  flex-wrap justify-center px-2">
          <Cards cardInfo={{ name: 'Bank Collection' }} isCollection={true} />
          <Cards cardInfo={{ name: 'USDC contract' }} isCollection={false} />
          <Cards cardInfo={{ name: 'New Collection' }} isCollection={true} />
          <Cards cardInfo={{ name: 'some Contract' }} isCollection={false} />
          <Cards cardInfo={{ name: 'New Collection' }} isCollection={true} />
          <Cards cardInfo={{ name: 'some Contract' }} isCollection={false} />
          <Cards cardInfo={{ name: 'New Collection' }} isCollection={true} />
          <Cards cardInfo={{ name: 'some Contract' }} isCollection={false} />
          <Cards cardInfo={{ name: 'New Collection' }} isCollection={true} />
          <Cards cardInfo={{ name: 'some Contract' }} isCollection={false} />
          <Cards cardInfo={{ name: 'some Contract' }} isCollection={false} />
          <Cards cardInfo={{ name: 'some Contract' }} isCollection={false} />
          <Cards cardInfo={{ name: 'some Contract' }} isCollection={false} />
          <Cards cardInfo={{ name: 'some Contract' }} isCollection={false} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
