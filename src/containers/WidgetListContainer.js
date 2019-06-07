import React from 'react';
import WidgetListComponent from '../components/WidgetListComponent'
import {connect} from 'react-redux'
import WidgetService from '../services/WidgetService'
const widgetService = WidgetService.getInstance();

const stateToPropertyMapper = state => ({
    widgets: state.widgets
})

const propertyToDispatchMapper = dispatch => ({
    findAllWidgets: () => 
        widgetService
            .findAllWidgets()
            .then(widgets => 
                dispatch({
                    type: 'FIND_ALL_WIDGETS',
                    widgets: widgets
                }))
})

const WidgetListContainer = connect(stateToPropertyMapper, propertyToDispatchMapper)(WidgetListComponent)

export default WidgetListContainer;