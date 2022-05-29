import { useEffect, useMemo, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';

import mapFixturesData from '../helpers/mapFixturesData';
import TeamsView from '../components/TeamsView';
import predictCalculator from '../helpers/predictCalculator';
import FixturesView from './FixturesView';
import LeagueView from './LeagueView';
import Preloader from './shared/Preloader';

import { getTeams, playMatch, generateFixtures } from '../api';

const MainView = () => {
  const queryClient = useQueryClient();

  const [fixturesData, setFixturesData] = useState(null);
  const [mode, setMode] = useState('init');
  const [weekNumber, setWeekNumber] = useState(1);
  const [allowSimulation, setAllowSimulation] = useState(true);
  const [teamsWithPrediction, setTeamsWithPrediction] = useState(true);

  const weeksCount = useMemo(
    () => fixturesData ? Object.keys(fixturesData).length : 0,
    [fixturesData]
  );

  const { isFetching, data: teams } = useQuery('teams', getTeams);

  const { mutate: populateFixtures, isLoading: isPopulating } = useMutation(generateFixtures, {
    onSuccess: (data) => {
      setFixturesData(mapFixturesData(data));
      queryClient.invalidateQueries('teams');
    }
  });

  const { mutate: play, isLoading: isPlaying } = useMutation(playMatch, {
    onSuccess: (data) => {
      queryClient.invalidateQueries('teams');
      setFixturesData({ ...fixturesData, ...mapFixturesData(data) })
    }
  });

  const onGoToFixturesScreen = () => {
    populateFixtures();
    setMode('fixtures');
  }

  const onPlayNextWeek = () => {
    play(weekNumber);
    if (weekNumber <= weeksCount) {
      setWeekNumber(weekNumber + 1);
    }
    setAllowSimulation(weekNumber + 1 <= weeksCount);
  }

  const onPlayAllWeeks = () => {
    play();
    setWeekNumber(weeksCount + 1)
    setAllowSimulation(false);
  }

  const resetData = () => {
    populateFixtures();
    setWeekNumber(1);
    setAllowSimulation(true);
  }

  useEffect(() => {
    if (teams) setTeamsWithPrediction(predictCalculator(teams));
  }, [teams]);

  if (isFetching || isPopulating || isPlaying) return <Preloader />;

  return (
    mode === 'init' ?
      <TeamsView teams={teams} onGoNext={onGoToFixturesScreen} /> :
      (mode === 'fixtures' ?
        <FixturesView fixturesData={fixturesData} onGoNext={() => setMode('simulation')} /> :
        <LeagueView
          teams={teams}
          fixturesData={fixturesData}
          allowSimulation={ allowSimulation}
          onPlayAllWeeks={onPlayAllWeeks}
          onPlayNextWeek={onPlayNextWeek}
          resetData={resetData}
          weekNumber={weekNumber}
          teamsWithPrediction={teamsWithPrediction}
        />)
  );
}

export default MainView;
