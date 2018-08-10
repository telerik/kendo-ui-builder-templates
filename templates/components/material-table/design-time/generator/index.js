'use strict';

module.exports = {
    augmentModel: function(metaModel, api) {
        const mb = api.require('modelBuilderService');

        mb.buildDataSource(metaModel);

        metaModel.columns = JSON.stringify(metaModel.columns);
        metaModel.dataSource = JSON.stringify(metaModel.dataSource);
    }
};
