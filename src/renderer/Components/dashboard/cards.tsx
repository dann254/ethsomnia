import { Link } from 'react-router-dom';
import { MoreHorizontal, FileText, Folder, Clock } from 'react-feather';

interface ICardProps {
  cardInfo: { name: string };
  isCollection?: boolean;
}

const Cards: React.FC<ICardProps> = (props) => {
  const { cardInfo, isCollection = false } = props;
  return (
    <Link
      to="/workspace"
      className="flex flex-col border border-blue-yonder/75 dark:border-white-default/25 rounded w-52 h-52 pt-2 pb-2 mt-2 mr-2 cursor-default hover:border-primary/75"
    >
      <div className="flex justify-between pr-2 items-center">
        <div className="flex items-center bg-black/10 dark:bg-white-default/10 px-2 py-0.5 rounded-r font-light text-xs">
          {isCollection ? (
            <div className="flex items-center space-x-1">
              <Folder size={12} />
              <span>Collection</span>
            </div>
          ) : (
            <div className="flex items-center space-x-1">
              <FileText size={12} />
              <span>Contract</span>
            </div>
          )}
        </div>

        <div className="cursor-pointer">
          <MoreHorizontal />
        </div>
      </div>
      <div className="grow pt-2  px-2 ">{cardInfo.name}</div>
      <div className="flex items-center space-x-2 px-2 ">
        <Clock size={12} />
        <span>4 years ago</span>
      </div>
    </Link>
  );
};

export default Cards;
