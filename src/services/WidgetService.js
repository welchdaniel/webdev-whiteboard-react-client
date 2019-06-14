export default class WidgetService {
    static myInstance = null;

    constructor() {}

    static getInstance = () => {
        if (WidgetService.myInstance == null) {
            WidgetService.myInstance = new WidgetService();
        }
        return this.myInstance;
    }

    createWidget = widget => {
        return fetch("http://localhost:8080/api/widgets", {
            method: 'POST',
            body: JSON.stringify(widget),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response =>response.json()) 
    }

    findAllWidgets = () => {
        return fetch("http://localhost:8080/api/widgets")
            .then(function(response) {return response.json();})
    }

    findWidgetById = wid => {
        const findWidgetUrl = "http://localhost:8080/api/widgets/USER_ID".replace('USER_ID', wid);
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
        const updateWidgetUrl = "http://localhost:8080/api/widgets/USER_ID".replace('USER_ID', wid);
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
        const deleteWidgetUrl = "http://localhost:8080/api/widgets/USER_ID".replace('USER_ID', wid);
        return fetch(deleteWidgetUrl, {
            method: 'DELETE'
        }).then(function(response) {
            return response.json();
        })
    }
}