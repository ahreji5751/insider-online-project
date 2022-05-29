import Table from './shared/Table';
import Button from './shared/Button';

const FixturesView = ({ fixturesData, onGoNext }) => (
  <div className="m-4">
    <p className="text-[30px] font-normal mt-2 mb-9 text-center">Generated Fixtures</p>
    <div className="flex flex-wrap">
      {
        Object.keys(fixturesData).map((week, index) =>
          <div key={index} className="w-[300px] mb-8 mr-8">
            <Table
              headers={[`Week ${week}`]}
              data={fixturesData[week]}
              dataFields={['caption']}
            />
          </div>
        )
      }
    </div>
    <Button onClick={onGoNext}>Start Simulation</Button>
  </div>
);

export default FixturesView;