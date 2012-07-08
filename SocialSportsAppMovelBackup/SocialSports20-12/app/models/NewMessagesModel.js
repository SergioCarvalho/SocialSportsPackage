SocialSports.models.NewMessagesModel = Ext.regModel('NewMessagesModel', {
    fields: [
        {
            name: 'id',
            type: 'int'
        }, {
            name: 'tema',
            type: 'string'
        }, {
			name: 'hashtag',
			type: 'string'
		}, {
			name: 'mensagem',
			type: 'string'
		},
    ],

    validations: [
        {
            type: 'presence',
            name: 'tema'
        }, 
		
		{
			type: 'presence',
			name: 'hashtag'
		},
		{
			type: 'presence',
			name: 'mensagem'
		}
    ],

    proxy: {
        type: 'localstorage',
        id: 'newmessages-lista'
    }
});
