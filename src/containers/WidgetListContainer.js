import React from 'react';
import WidgetListComponent from '../components/WidgetListComponent'
import {connect} from 'react-redux'

const stateToPropertyMapper = state => ({
    widgets: state.widgets
})

const WidgetListContainer = connect(stateToPropertyMapper)(WidgetListComponent)

export default WidgetListContainer;