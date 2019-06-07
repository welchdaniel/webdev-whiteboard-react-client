import WidgetService from '../services/WidgetService'
const widgetService = WidgetService.getInstance();
let widgets = widgetService.findAllWidgets();

const WidgetReducer = (state = {widgets: [], editing: false}, action) => {
 switch (action.type) {
    case 'TOGGLE_EDITING':
        return {widgets: action.widgets, editing: !action.editing};
    case 'CREATE_WIDGET':
        return {widgets: action.widgets, editing: action.editing};
    case 'DELETE_WIDGET':
        return {widgets: action.widgets, editing: action.editing};
    case 'UPDATE_WIDGET':
        return {widgets: action.widgets, editing: action.editing};
    case 'FIND_WIDGET':
        return {widgets: action.widgets, editing: action.editing};
    case 'FIND_ALL_WIDGETS':
        return {widgets: action.widgets, editing: action.editing};
    default: 
        return state
}}

export default WidgetReducer;