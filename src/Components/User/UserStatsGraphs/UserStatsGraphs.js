import React from 'react';
import { Graph, Total } from './UserStatsGraphs.style';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = React.useState([0]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const graphData = data.map((item) => {
      return { x: item.title, y: Number(item.acessos) };
    });

    if (data.length > 0) {
      setTotal(
        data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b),
      );
    }

    setGraph(graphData);
  }, [data]);

  return (
    <Graph className="animeLeft">
      <Total className="GraphItem">
        <p>Acessos: {total}</p>
      </Total>
      <div className="GraphItem">
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, height: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: '#fff',
              strokeWidth: 2,
            },
            label: {
              fontSize: 14,
              fill: '#333',
            },
          }}
        />
      </div>
      <div className="GraphItem">
        <VictoryChart>
          <VictoryBar data={graph} alignment="start"></VictoryBar>
        </VictoryChart>
      </div>
    </Graph>
  );
};

export default UserStatsGraphs;
