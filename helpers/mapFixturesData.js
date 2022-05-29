const mapFixturesData = data =>
  data.reduce((result, { week, guest_team, host_team, host_goals, guest_goals }) => {
    if (result[week]) {
      result[week].push({ caption: `${host_team.name} ${host_goals} - ${guest_goals} ${guest_team.name}` });
    } else {
      result[week] = [{ caption: `${host_team.name} ${host_goals} - ${guest_goals} ${guest_team.name}` }];
    }
    return result;
  }, {});

export default mapFixturesData;