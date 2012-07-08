SocialSports.views.ErrorField = Ext.extend(Ext.Component, {

    initComponent: function() {
        config = {
            xtype: 'component',
            id: this.fieldname + 'ErrorField',
            cls: 'errorfield',
            tpl: [
                '<tpl if="values.length &gt; 0">',
                '    <ul>',
                '        <tpl for=".">',
            //    '            <li>{field} {message}</li>',
				'			<li> O campo acima não pode ser vazio </li>',
                '        </tpl>',
                '    </ul>',
                '</tpl>'
            ],
            hidden: true
        };

        Ext.apply(this, config);
        SocialSports.views.ErrorField.superclass.initComponent.call(this);
    },

});
Ext.reg('SocialSports.views.ErrorField', SocialSports.views.ErrorField);
