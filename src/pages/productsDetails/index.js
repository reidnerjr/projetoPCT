import React from 'react';
import Header from 'shared/component/header';
import styles from './styles';

function productsDetails() {
  const classes = styles();

  return (
    <div className={classes.container}>
      <Header />
      <div>
        {/* <Container>
          <Panel>
            <Column>
              <Info />
            </Column>

            <Column></Column>
          </Panel>
        </Container> */}
      </div>
    </div>
  );
}
// const Info = () => <Description></Description>;

export default productsDetails;
