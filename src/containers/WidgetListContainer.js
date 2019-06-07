import React from 'react';
import WidgetListComponent from '../components/WidgetListComponent'
import {connect} from 'react-redux'
import WidgetService from '../services/WidgetService'
const widgetService = WidgetService.getInstance();

const stateToPropertyMapper = state => ({
    widgets: state.widgets,
    editing: state.editing
})

const propertyToDispatchMapper = dispatch => ({
    toggleEditing: editing => 
    widgetService
        .findAllWidgets()
        .then(widgets => 
            dispatch({
                type: 'TOGGLE_EDITING',
                widgets: widgets,
                editing: editing
        })),
    deleteWidget: widgetId => 
        widgetService
            .deleteWidget(widgetId)
            .then(widgets => 
                dispatch({
                    type: 'DELETE_WIDGET',
                    widgets: widgets,
                    editing: true
                })
            ),
    createWidget: () =>
        widgetService
            .createWidget({
                id: (new Date()).getTime(),
                name: 'New Widget',
                type: 'HEADING'
            })
            .then(widgets => 
                dispatch({
                    type: 'CREATE_WIDGET',
                    widgets: widgets,
                    editing: true
                })
            ),
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