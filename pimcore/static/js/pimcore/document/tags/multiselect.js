/**
 * Pimcore
 *
 * This source file is available under two different licenses:
 * - GNU General Public License version 3 (GPLv3)
 * - Pimcore Enterprise License (PEL)
 * Full copyright and license information is available in
 * LICENSE.md which is distributed with this source code.
 *
 * @copyright  Copyright (c) 2009-2016 pimcore GmbH (http://www.pimcore.org)
 * @license    http://www.pimcore.org/license     GPLv3 and PEL
 */

pimcore.registerNS("pimcore.document.tags.multiselect");
pimcore.document.tags.multiselect = Class.create(pimcore.document.tag, {

    initialize: function(id, name, options, data, inherited) {
        this.id = id;
        this.name = name;

        this.setupWrapper();

        options = this.parseOptions(options);
        options.name = id + "_editable";
        options.value = data;

        options.listeners = {};
        // onchange event
        if (options.onchange) {
            options.listeners.change = eval(options.onchange);
        }

        if (options["reload"]) {
            options.listeners.change = this.reloadDocument;
        }

        this.element = new Ext.ux.form.MultiSelect(options);

        this.element.render(id);
    },

    getValue: function () {
        return this.element.getValue();
    },

    getType: function () {
        return "multiselect";
    }
});