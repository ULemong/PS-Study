function solution(tickets) {
  let answer;

  tickets.sort();
  const visited = new Array(tickets.length).fill(0);

  const dfs = (ticket, start, route) => {
    route.push(start);

    if (route.length === ticket.length + 1) {
      answer = route;
      return true;
    }

    for (let i = 0; i < ticket.length; i++) {
      if (visited[i] === 0 && ticket[i][0] === start) {
        visited[i] = 1;

        const result = dfs(ticket, ticket[i][1], route);
        if (result) return true;

        visited[i] = 0;
        route.pop();
      }
    }
    return false;
  };

  dfs(tickets, 'ICN', []);
  return answer;
}

console.log(
  solution([
    ['ICN', 'JFK'],
    ['HND', 'IAD'],
    ['JFK', 'HND'],
  ])
);
// console.log(solution([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]]))
