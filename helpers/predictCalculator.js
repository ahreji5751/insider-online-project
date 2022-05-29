const predictCalculator = teams => {
  const teamsWithScores = teams.map(team => ({ ...team, score: (team.p + team.pts + team.w) / 3 }));
  const totalScore = teamsWithScores.reduce((result, team) => result + team.score, 0);
  return teamsWithScores.map(team => ({ ...team, percent: Math.round(team.score / totalScore * 100).toFixed(2) }));
}

export default predictCalculator;