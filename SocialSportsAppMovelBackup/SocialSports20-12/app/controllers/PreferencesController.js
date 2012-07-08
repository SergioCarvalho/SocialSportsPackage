Ext.regController('PreferencesController', {
	store: SocialSports.stores.PreferencesStore,
	
	//function save
    save: function(params) {
        params.record.set(params.data);
        var errors = params.record.validate();

        if (errors.isValid()) {
			//aqui antes de criar vou remover a entrada anteriormente criada porque só queremos ter uma preferência
            this.store.create(params.data);
			Ext.Msg.alert('Preferências guardadas!');
			Ext.getCmp('preferencesform').resetForm();
            //Aqui vai fazer o dispatch para a new messages 
			Ext.dispatch({
				controller:'Home',
				action: 'preferences',
			});
        } else {
            params.form.showErrors(errors);
        }
    },

});