import { HomeContainer, Selector, SelectorButton, SettingsButton, StartPauseButton, Timer, TimerContainer, Title } from "./styled";
import { Gear } from 'phosphor-react'

export function Home() {
  return (
    <HomeContainer>
      <Title>Pomodoro</Title>

      <Selector>
        <SelectorButton selected={true}>Pomodoro</SelectorButton>
        <SelectorButton selected={false}>Short Break</SelectorButton>
        <SelectorButton selected={false}>Long Break</SelectorButton>
      </Selector>

      <TimerContainer>
        <Timer>
          <span>0</span>
          <span>5</span>
          <span>:</span>
          <span>2</span>
          <span>8</span>
        </Timer>
      </TimerContainer>

      <StartPauseButton>
        Start
      </StartPauseButton>

      <SettingsButton>
        <Gear size={32} />
      </SettingsButton>
    </HomeContainer>
  )
}