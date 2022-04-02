import Sidebar from './sidebar';
import RequestPane from './RequestPane';
import ResponsePane from './ResponsePane';
import Split from 'react-split';

const Workspace: React.FC = () => {
  return (
    <div className="flex flex-row h-screen w-full text-sm overflow-hidden">
      <Split
        className="flex flex-1 flex-row mt-10 w-full overflow-hidden"
        gutterSize={4}
        gutterAlign="start"
        sizes={[18, 82]}
      >
        <Sidebar />
        <Split
          className="flex flex-row grow h-full"
          gutterSize={4}
          gutterAlign="start"
          direction="horizontal"
        >
          <RequestPane />
          <ResponsePane />
        </Split>
      </Split>
    </div>
  );
};

export default Workspace;
