import Table from './shared/Table';
import Button from './shared/Button';

const LeagueView = ({
  teams,
  fixturesData,
  teamsWithPrediction,
  weekNumber,
  onPlayAllWeeks,
  allowSimulation,
  onPlayNextWeek,
  resetData
}) => (
  <div className="m-4">
    <p className="text-[30px] font-normal mt-2 mb-9 text-center">Simulation</p>
    <div className="grid grid-cols-4 flex items-start gap-4 pb-7 border-b">
      <Table
        headers={['Team Name', 'PTS', 'P', 'W', 'D', 'L', 'GD']}
        data={teams}
        dataFields={['name', 'pts', 'p', 'w', 'd', 'l', 'gd']}
        className="col-span-2"
      />
      <Table
        headers={[`Week ${weekNumber - 1 || 1}`]}
        data={fixturesData[weekNumber - 1 || 1]}
        dataFields={['caption']}
      />
      <Table
        headers={['Championship Predictions', '%']}
        data={teamsWithPrediction}
        dataFields={['name', 'percent']}
      />
    </div>
    <div className="flex justify-around pt-5">
      <Button
        onClick={onPlayAllWeeks}
        disabled={!allowSimulation || weekNumber !== 1}
      >
        Play All Weeks
      </Button>
      <Button
        onClick={onPlayNextWeek}
        disabled={!allowSimulation}
      >
        Play Next Week
      </Button>
      <Button onClick={resetData} className="bg-red-500">Reset Data</Button>
    </div>
  </div>
);

export default LeagueView;