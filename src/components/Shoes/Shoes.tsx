import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '../../store';
import { Shoe } from '../../store/ducks/shoes/types';
import * as ShoesActions from '../../store/ducks/shoes/actions'

interface StateProps {
  shoes: Shoe[]
}

interface DispatchProps {
  loadRequest(): void
}

type Props = StateProps & DispatchProps;

class ShoesList extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }

  render() {
    const { shoes } = this.props;

    return(
      <ul>
        {shoes.map(shoe => shoe.name)}
      </ul>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  shoes: state.shoes.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(ShoesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ShoesList);
