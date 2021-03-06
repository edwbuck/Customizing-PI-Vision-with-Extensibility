(function (PV) {
	"use strict";

	function symbolVis() { };
	PV.deriveVisualizationFromBase(symbolVis);

	var definition = {
		typeName: "lm_custom_styles",
		//iconUrl: 'Scripts\\app\\editor\\symbols\\ext\\images\\ts.png',
		visObjectType: symbolVis,
		datasourceBehavior: PV.Extensibility.Enums.DatasourceBehaviors.Multiple,
		getDefaultConfig: function(){ 
			return {
				DataShape: 'timeseries',
				Height: 150,
				Width: 150 
			}
		}
	}

	symbolVis.prototype.init = function(scope, elem) {

		this.onDataUpdate = dataUpdate;

		function dataUpdate(newData)
		{
			if(!newData)
			{
				return;
			}

			//console.log(newData)

			var first = newData.Data[0];

			scope.Values = first.Values;

			// Sporadic...
			if(first.Label)
			{
				scope.Label = first.Label;
				scope.Units = first.Units;
			}
		}

	 };

	PV.symbolCatalog.register(definition);

})(window.PIVisualization); 
