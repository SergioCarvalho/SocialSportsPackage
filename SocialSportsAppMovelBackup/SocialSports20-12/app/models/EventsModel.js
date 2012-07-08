SocialSports.models.EventsModel = Ext.regModel('EventsModel', {
    fields: [
        {
            name: 'id',
            type: 'int'
        }, {
            name: 'name',
            type: 'string'
        }, {
			name: 'modalidade',
			type: 'string'
		}
    ],

    validations: [
        {
            type: 'presence',
            name: 'name'
        }, 
		
		{
			type: 'presence',
			name: 'modalidade'
		}
    ],

    proxy: {
        type: 'localstorage',
        id: 'evento-lista'
    }
});
