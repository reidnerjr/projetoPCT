import { makeStyles, Paper } from '@material-ui/core';
import styled from 'styled-components';

export const styles = makeStyles(() => ({
  header: {
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingBottom: '80',
  },
  textAlert: {
    fontSize: 50,
    alignItems: 'center',
    color: 'black',
  },
  ModalAlert: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '17%',
    borderRadius: 30,
  },
  root: {
    paddingTop: '3%',
    marginLeft: '15%',
    marginRight: '15%',
    background: '#F5F5F5',
    display: 'flex',
  },
  card: {
    display: 'flex',
    padding: 10,
    marginLeft: '100px',
    width: 300,
    height: 300,
    borderRadius: '5px',
    background: 'gray',
  },
  titleCard: {
    fontSize: 14,
  },
  buttonFinish: {
    backgroundColor: 'orange',
    borderRadius: '8px',
    height: 60,
    width: 500,
    color: 'black',
    margin: 60,
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export const ModalContainerAlert = styled(Paper)`
  border-radius: 10px;
  width: 360px;
  height: 304px;
  display: flex;
  @media (max-width: 1024px) {
    width: 900px;
  }
  @media (max-width: 768px) {
    width: 700px;
  }
`;
