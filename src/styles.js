import styled from 'styled-components'

export const Container = styled.div`

  min-height: 50vh;
  min-width: 30vw;
  max-width: 60vw ;
  background-color: rgba(120, 105, 205);
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.9);
  gap: 20px;
`
export const List = styled.li`
  background-color: rgba(120, 105, 229);
  width: 100%;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  padding: 0 15px 0 15px;
  border-radius: 30px;
  margin-bottom: 10px;
  justify-content: space-between;
`