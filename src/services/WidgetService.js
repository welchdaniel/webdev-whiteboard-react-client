export default class WidgetService {
    static widgetServiceUrl = 'https://localhost:8080/api/widgets';
    static widgetServiceIdUrl = 'https://localhost:8080/api/widgets/USER_ID';
    static myInstance = null;

    constructor() {}

    static getInstance = () => {
        if (WidgetService.myInstance == null) {
            WidgetService.myInstance = new WidgetService();
        }
        return this.myInstance;
    }

    createWidget = widget => {
        return fetch(this.widgetServiceUrl, {
            method: 'POST',
            body: JSON.stringify(widget),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function(response) {
            return response.json();
        })
    }

    findAllWidgets = () => {
        return fetch(this.widgetServiceUrl, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function(response) {
            return response.json();
        })
    }

    findWidgetById = wid => {
        const findWidgetUrl = this.widgetServiceIdUrl.replace('USER_ID', wid);
        return fetch(findWidgetUrl, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function(response) {
            return response.json();
        })
    }

    updateWidget = (wid, widget) => {
        const updateWidgetUrl = this.widgetServiceIdUrl.replace('USER_ID', wid);
        return fetch(updateWidgetUrl, {
            method: 'PUT',
            body: JSON.stringify(widget),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function(response) {
            return response.json();
        })
    }

    deleteWidget = wid => {
        const deleteWidgetUrl = this.widgetServiceIdUrl.replace('USER_ID', wid);
        return fetch(deleteWidgetUrl, {
            method: 'DELETE'
        }).then(function(response) {
            return response.json();
        })
    }
}