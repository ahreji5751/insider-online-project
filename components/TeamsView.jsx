import Table from './shared/Table';
import Button from './shared/Button';

const TeamsView = ({ teams, onGoNext }) => (
  <div className="absolute left-0 right-0 flex justify-center items-center flex-col h-full ">
    <div className="w-[400px]">
      <p className="text-[20px] mb-2">Tournament Teams</p>
      <Table
        headers={['Team Name']}
        dataFields={['name']}
        data={teams}
      />
      <Button onClick={onGoNext}>Generate Fixtures</Button>
    </div>
  </div>
);

export default TeamsView;