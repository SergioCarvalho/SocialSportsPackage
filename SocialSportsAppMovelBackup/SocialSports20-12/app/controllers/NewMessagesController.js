Ext.regController('NewMessagesController', {
	store: SocialSports.stores.NewMessagesStore,
	
	//function save
    save: function(params) {
        params.record.set(params.data);
        var errors = params.record.validate();

        if (errors.isValid()) {
            this.store.create(params.data);
			Ext.Msg.alert('Mensagem enviada!');
			Ext.getCmp('messageform').resetForm();
            //Aqui vai fazer o dispatch para a new messages 
			Ext.dispatch({
				controller:'Home',
				action: 'newmessage',
			});
        } else {
            params.form.showErrors(errors);
        }
    },

});