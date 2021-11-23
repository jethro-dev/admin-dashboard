import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Container = styled.div`
  margin-bottom: 25px;
  padding: 20px 30px;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

const Title = styled.h3`
  font-weight: 400;
  font-size: 1.3rem;
  margin-bottom: 20px;
`;

const Chart = ({ title, data, dataKey, grid }) => {
  const [windowWidth, setWindowWidth] = useState(null);
  const [chartAspect, setChartAspect] = useState(
    windowWidth > 768 ? 3 / 1 : 5 / 2
  );

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    if (windowWidth > 768) {
      setChartAspect(3 / 1);
    } else {
      setChartAspect(5 / 2);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container>
      <Title>{title}</Title>
      <ResponsiveContainer width="100%" aspect={chartAspect}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#7570d4" />
          <Line type="monotone" dataKey={dataKey} stroke="#7570d4" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e9e9e9" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
};

export default Chart;
