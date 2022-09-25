import styled from "styled-components";

export const HomeContainer = styled.main`
  height: 100vh;
  padding: 2rem 1rem;
`;

export const Title = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

export const Selector = styled.div`
  width: 320px;
  height: 70px;
  padding: 0.5rem;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  background: #24243e;
  margin-bottom: 3rem;
  transition: all 0.2s ease-in-out;
`;

export interface SelectorButtonProps {
  selected?: boolean;
}

export const SelectorButton = styled.div<SelectorButtonProps>`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  cursor: pointer;
  background: ${(props) => (props.selected ? "tomato" : "transparent")};
  color: ${(props) => (props.selected ? "#222" : "#304b73")};
  font-weight: bold;
  transition: all 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const TimerContainer = styled.div`
  width: 320px;
  height: 320px;
  padding: 1.5rem;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0f0c29;
  margin-bottom: 3rem;
`;

export const Timer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border: 1rem solid tomato;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-weight: 900;
    font-size: 3.5rem;
  }
`;

export const StartPauseButton = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: tomato;
  color: #f2f2f2;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const SettingsButton = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #e8e8e8;
  transition: all 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.9);
  }
`;
