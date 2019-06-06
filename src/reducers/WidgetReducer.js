const WidgetReducer = (state = {someDefaultProperty: 'some state'}, action) => {
 switch (action.type) {
    case 'CREATE_WIDGET':
        alert('creates a new widget instance');
        return {someStateAttribute: 'some new state'};
    case 'DELETE_WIDGET':
        alert('removes an existing widget');
        return {someStateAttribute: 'some new state'};
    case 'UPDATE_WIDGET':
        alert('updates an existing widget');
        return {someStateAttribute: 'some new state'};
    case 'FIND_WIDGET':
        alert('retrieves a particular widget');
        return {someStateAttribute: 'some new state'};
    case 'FIND_ALL_WIDGETS':
        alert('retrieves all widgets');
        return {someStateAttribute: 'some new state'};
    default: 
        return state
}}
